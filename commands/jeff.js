module.exports = {
    name: 'jeff',
    description: "jeff Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle('JeffJeff')
        .setDescription('Apex Team Coach | <@693179644006105089>')
        .setImage('https://media.discordapp.net/attachments/965292650221695008/965326730938171412/unknown.png?width=164&height=164')
        .setFooter('im cool')
        message.channel.send({embeds:[newEmbed]})
     }
}