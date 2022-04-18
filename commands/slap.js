module.exports = {
    name: 'slap',
    description: "slap command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Eat this!')
        .setImage('https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943')
        message.channel.send({embeds:[newEmbed]})
    }
}
