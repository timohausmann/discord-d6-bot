/**
 * w6help
 * @param {Discord.Message} msg 
 * @returns {Promise}
 */
module.exports = function w6help(msg) {

    return msg.reply([
        'Dice Bot at your service. I listen to these commands:',
        'E.g. roll 8× 6-sided dice:',
        '🇬🇧 `/8d6` or `/d6 8`',
        '🇩🇪 `/8w6` or `/w6 8`',
        'E.g. roll one 100-sided dice:',
        '🇬🇧 `/d100`',
        '🇩🇪 `/w100`',
    ].join('\n'));
}