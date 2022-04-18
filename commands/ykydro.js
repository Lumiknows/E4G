module.exports = {
    name: 'ykydro',
    description: "DEV Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle('Ykydro')
        .setDescription('Apex Team Manager/Developer | <@722088541542285333>')
        .setImage('https://media.discordapp.net/attachments/965292650221695008/965326418714185728/unknown.png?width=164&height=164')
        .setFooter('Sit The Fuck Down!')
        message.channel.send({embeds:[newEmbed]})
     }
}