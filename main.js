const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('E4G Esports In Game')
    client.user.setActivity('Prefix is !', { type: 'PLAYING'});
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'lazty'){
        client.commands.get('lazty').execute(message, args, Discord);
    } else if (command === 'link'){
        client.commands.get('link').execute(message, args);
    }  else if(command === 'ykydro'){
            client.commands.get('ykydro').execute(message, args, Discord);
    }  else if(command === 'rainny'){
            client.commands.get('rainny').execute(message, args, Discord);
    }  else if(command === 'shinigami'){
            client.commands.get('shinigami').execute(message, args, Discord);
    }  else if(command === 'apexm'){
            client.commands.get('apexm').execute(message, args, Discord);
    }  else if(command === 'azaf'){
            client.commands.get('azaf').execute(message, args, Discord);
    }  else if(command === 'aexotic'){
            client.commands.get('aexotic').execute(message, args, Discord);
    }  else if(command === 'wr'){
            client.commands.get('wr').execute(message, args, Discord);
    }  else if(command === 'jeff'){
            client.commands.get('jeff').execute(message, args, Discord);
    }  else if(command === 'wra'){
            client.commands.get('wra').execute(message, args, Discord);
    }  else if(command === 'kick'){
            client.commands.get('kick').execute(message, args);
    }  else if(command === 'ban'){
            client.commands.get('ban').execute(message, args);
    }
});

client.login('OTY1Mjg3NDQ1MzU0NjY4MTMy.Ylw__Q.NeTN8l1nlXdCIugZh5JYXO_npKE');