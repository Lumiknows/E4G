module.exports = {
    name: 'azaf',
    description: "DEV Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle('Azáf')
        .setDescription('ApexM AS Team Offensive | <@430337899825856512>')
        .setImage('https://media.discordapp.net/attachments/965292650221695008/965326063414673428/unknown.png?width=164&height=164')
        .setFooter('None')
        message.channel.send({embeds:[newEmbed]})
     }
}