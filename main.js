//imports discord.js
const Discord = require('discord.js');

//creates client
const client = new Discord.Client();

//command handler
const prefix = '-';

client.once('ready', () =>{
    console.log('Bot is live.')
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'nice' && message.author.username != 'southwingman'){
        message.channel.send('cock!');
    }
});
client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'nice' && message.author.username == 'southwingman'){
        message.channel.send('small cock!', {tts:true});

    }
});
client.on('voiceStateUpdate', (oldState, newState) =>{ 
    if (newState.channelID !== null){
        message.channel.send('Welcome Dipshit!'); //not a proper command since not in message function
    }
});




//login that has to go at end of file
client.login('ODcxOTQ1NzM4MTEwNzYzMDk4.YQisvw.-aCAoD04_5KiaCyl7Qq8vvWdFiY')