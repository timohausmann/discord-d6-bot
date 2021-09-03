/**
 * w6help
 * @param {Discord.Message} msg 
 * @returns {Promise}
 */
module.exports = function w6help(msg) {

    return msg.reply([
        'Dice Bot at your service.',
        'Example usage: `/8d6` – roll 8× 6-sided dices',
        '`/d6crit` – roll a critical d66',
        'For more commands, feedback and bug reports please visit https://github.com/timohausmann/discord-d6-bot',
    ].join('\n'));
}