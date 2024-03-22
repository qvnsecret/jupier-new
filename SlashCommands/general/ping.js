const Discord = require("discord.js")

const pretty = require("pretty-ms")


module.exports = {
  name:"ping",
  description:"Returns websocket ping",
  run: async (client, interaction, args) => {
    let embed = new Discord.MessageEmbed()
    . addFields(
      {
        name:"**<:squareup:1192077864795914301> API Latency**",
        value:`<:sugreen:1193280684480020520> | ${client.ws.ping}ms`
      },
      {
        name:"**Message Latency**",
        value:`<:sured:1193281075141677149> | ${Date.now() - interaction.createdTimestamp}ms`
      },
      {
        name:"**Uptime**",
        value:`<:sucloud:1192126327537549423> | ${pretty(client.uptime)}`
      }
    )
    .setColor("WHITE")
    .setTitle("**<:sucloud:1192126327537549423> | Pong!**")
    .setFooter({
      text:`Requested by ${interaction.user.username}`,
      iconURL: interaction.user.displayAvatarURL({dynamic:true})
    })
    interaction.editReply({embeds:[new Discord.MessageEmbed().setDescription(" <:suorange:1193280938910695514> Loading...").setColor("WHITE")]}).then(() =>
      setTimeout(() => {
        interaction.editReply({embeds:[embed]})
      }, 2*1000))
  }
}