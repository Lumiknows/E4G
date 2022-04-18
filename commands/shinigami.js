module.exports = {
    name: 'shinigami',
    description: "MAN Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle('Shinigami')
        .setDescription('Wild Rift Main Top Laner | <@483619726946467843>')
        .setImage('https://media.discordapp.net/attachments/965292650221695008/965326239671926824/unknown.png?width=164&height=164')
        .setFooter('u suck')
        message.channel.send({embeds:[newEmbed]})
     }
}