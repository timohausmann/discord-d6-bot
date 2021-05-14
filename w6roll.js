/**
 * @var {RegExp} rgx allows multiple formats (see help)
 */
const rgx = new RegExp(/^\/(\d+)?[wWdD](\d+)\s?(\d+)?\s?(sum)?/);

/**
 * Array of gif urls to celebrate three or more sixes
 * @var {string[]} winGifs
 */
const winGifs = [
    'https://i.giphy.com/media/vmon3eAOp1WfK/200.gif',
];
    
/**
 * w6roll
 * @param {Discord.Message} msg 
 * @returns {Promise|null}
 */
module.exports = function w6roll(msg) {

    const parsed = msg.content.match(rgx);
    if(parsed === null) return null;

    const { w, num, sum } = resolveRegex(parsed);
    
    //limit number of dices
    if(num > 512) {
        console.log(new Date().toISOString(), 'Bot tried to roll more than 512 dices.')
        return msg.reply('I cannot roll more than 512 dices at once.');
    }

    const dices = new Array(num).fill(0).map(() => Math.ceil(Math.random()*w)).sort((a, b) => a - b);
    const replyStr = formatDices(dices, sum);
    console.log(new Date().toISOString(), 'Bot rolled', replyStr);

    return msg.reply(replyStr)
        .then((w === 6) ? reactCoriolis : () => {})
        .catch(e => console.log(new Date().toISOString(), 'Roll Message Error', e));

    /**
     * reactCoriolis
     * @param {Discord.Message} botMsg 
     * @returns {Promise|null}
     */
    function reactCoriolis(botMsg) {
        const wins = dices.filter(num => num === 6);        
        const reaction = (wins.length >= 1) ? '🎉' : '💩';
        botMsg.react(reaction);

        if(wins.length >= 3) {
            return msg.channel.send({
                files: [winGifs[Math.floor(Math.random() * winGifs.length)]]
            })
        }
        return null;
    }

    /**
     * formatDices
     * @param {number[]} dices 
     * @param {boolean} sum 
     * @returns {string}
     */
    function formatDices(dices, sum) {
        let str = '`' + parsed[0].trim() + '` ⇒ ';
        str += dices.map(num => num === w ? `**${num}**` : num).join(' ');
        
        //optionally sum up
        if(sum) str += ` *– sum ${dices.reduce((prev, curr) => prev+curr, 0)}*`;

        //don't execeed 2000 character limit
        const truncMsg = '`… message too long, truncating.`';
        if(str.length > 1900) {
            str = str.substr(0, 1900-truncMsg.length) + truncMsg;
        }

        return str;
    }
}

/**
 * resolveRegex
 * @param {string[]} parsed rgx result
 * @returns {object} {num, sum, w}
 */
function resolveRegex(parsed) {

    let num = 1;
    let sum = parsed[4] ? true : false;
    let w = parseInt(parsed[2]);

    if(parsed[1] !== undefined) {
        num = parseInt(parsed[1]); //"8w6"
    } else if(parsed[3] !== undefined) {
        num = parseInt(parsed[3]); //"w6 8"
    }

    return { num, sum, w };
}