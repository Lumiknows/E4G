module.exports = {
    name: 'rainny',
    description: "MAN Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle('Rainny')
        .setDescription('Wild Rift Team Manager | <@586024837290655759>')
        .setImage('https://media.discordapp.net/attachments/965292650221695008/965325957344940082/unknown.png?width=164&height=164')
        
        message.channel.send({embeds:[newEmbed]})
     }
}