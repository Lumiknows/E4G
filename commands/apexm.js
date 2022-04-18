module.exports = {
    name: 'apexm',
    description: "apexm Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle('Apex Legends Mobile Player List')
        .setURL('https://discord.gg/AsgxZustBv')
        .setImage('https://media.discordapp.net/attachments/860871193951338538/960503271389270036/unknown.png?width=320&height=100')
        .addFields(
            {name: 'Ykydro', value:'E4G Team Manager'},
            {name: 'JeffJeff', value:'E4G Team Coach'},
            {name: 'Aexotic', value:'E4G AS Team Captain'},
            {name: 'Azaf', value:'E4G AS Team'},
            {name: 'Vained', value:'E4G AS Team'},
            {name: 'Involved', value:'E4G AS Team'},         
            {name: 'Irrelevant', value:'E4G NA Team'},
            {name: '805', value:'E4G NA Team'},  
        )        
        .setFooter({ text: 'If you want to apply for the team DM Ykydro', iconURL: 'https://cdn.discordapp.com/emojis/904312845041299486.webp?size=80&quality=lossless' })
        message.channel.send({embeds:[newEmbed]})
     }
}