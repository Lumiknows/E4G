module.exports = {
    name: 'lazty',
    description: "CEO Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#38d3a8')
        .setTitle('Lazty')
        .setDescription('Chief Executive Officer | <@759595625477308416>')
        .setImage('https://media.discordapp.net/attachments/965292650221695008/965320660001882122/dbfd8230d0a72faa567c381ef2fc3903.png?width=164&height=164')
        .setFooter('Sleep more kid')
        message.channel.send({embeds:[newEmbed]})
     }
}