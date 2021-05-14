/**
 * w6help
 * @param {Discord.Message} msg 
 * @returns {Promise}
 */
module.exports = function w6help(msg) {

    return msg.reply([
        'Dice Bot at your service. Quick help:',
        '`/8d6` – roll 8× 6-sided dices',
        'For more commands, feedback and bug reports please visit https://github.com/timohausmann/discord-d6-bot',
    ].join('\n'));
}