module.exports = {
    name: 'wr',
    description: "wr Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#420420')
        .setTitle('Wild Rift Player List')
        .setURL('https://discord.gg/AsgxZustBv')
        .setImage('https://media.discordapp.net/attachments/860871193951338538/960503271389270036/unknown.png?width=320&height=100')
        .addFields(
            {name: 'Rainny', value:'E4G Team Manager'},
            {name: 'DunotPretz', value:'E4G Team Coach'},
            {name: 'Shinigami', value:'E4G Main Team Top'},
            {name: 'Regre2', value:'E4G Main Team Mid'},
            {name: 'Oracle', value:'E4G Main Team Bot'},
            {name: 'Unilateral', value:'E4G Main Team Support'},         
            {name: 'Guffawd', value:'E4G Main Team Jungle'},              
        )        
        .setFooter({ text: '#StayEvolve', iconURL: 'https://cdn.discordapp.com/emojis/904308328115630161.webp?size=80&quality=lossless' })
        message.channel.send({embeds:[newEmbed]})
     }
}