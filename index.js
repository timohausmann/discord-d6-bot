require('dotenv').config();
const Discord = require('discord.js');
const w6help = require('./w6help.js');
const w6roll = require('./w6roll.js');


const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready');
    client.user.setActivity('/d6help', {
        type: 'LISTENING'
    });
});

client.on('message', (msg) => {
    switch(msg.content.toUpperCase()) {
        case '/W6HELP':
        case '/D6HELP':
        case '/W6 HELP':
        case '/D6 HELP':
            w6help(msg);
        break;
        default: 
            w6roll(msg);
        break;
    }    
});

client.login(process.env.BOT_TOKEN);