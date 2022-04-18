
module.exports = {
    name: 'wra',
    escription: "wra Command",
                execute(message, args, Discord) {
                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#420420')
                    .setTitle('Wild Rift Academy Player List')
                    .setURL('https://discord.gg/AsgxZustBv')
                    .setImage('https://media.discordapp.net/attachments/860871193951338538/960503271389270036/unknown.png?width=320&height=100')
                    .addFields(
                        {name: 'Rainny', value:'E4G Team Manager'},
                        {name: 'DunotPretz', value:'E4G Team Coach'},
                        {name: 'Darkblade', value:'E4G Academy Team Top'},
                        {name: 'Ace7', value:'E4G Academy Team Mid'},
                        {name: 'Yassuo', value:'E4G Academy Team Mid'},
                        {name: 'Nouse', value:'E4G Academy Team Bot'},         
                        {name: 'Hope', value:'E4G Academy Team Support'},               
                    )        
                    .setFooter({ text: '#StayEvolve', iconURL: 'https://cdn.discordapp.com/emojis/904308328115630161.webp?size=80&quality=lossless' })
                    message.channel.send({embeds:[newEmbed]})
                 }
            }