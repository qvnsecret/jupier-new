const { Discord , MessageEmbed} = require('discord.js')
module.exports = {
  name: "lock",
  category: "mod",
  description: "locks the current or selected text channels",
  options: [],
run : async (client, interaction, args) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.editReply({content : `** You do not have permission to use the command! 
<:sudislike:1192079445956239401> **`});
interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
SEND_MESSAGES: false
      })
      .then(() => {
let locked = new MessageEmbed()
.setTitle("LOCK <:sulock:1192130190550249472>")
.setDescription(`
> <:sulike:1192079393154138183> | **locked Channel**
> **Channel Name** : <#${interaction.channel.id}>
> **Locked By** : <@${interaction.user.id}>`)
.setColor("WHITE")
.setTimestamp()
 interaction.editReply({ embeds: [locked] })
});
}
}