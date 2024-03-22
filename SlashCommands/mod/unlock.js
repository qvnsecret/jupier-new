const { Discord , MessageEmbed} = require('discord.js')
module.exports = {
  name: "unlock",
  category: "mod",
  description: "unLocks the current or selected text channels",
  options: [],
run : async (client, interaction, args) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.editReply({content : `** You do not have permission to use the command! 
<:sudislike:1192079445956239401> **`});
interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
SEND_MESSAGES: true
      })
      .then(() => {
let locked = new MessageEmbed()
.setTitle("UNLOCK <:suunlock:1192130244543516673>")
.setDescription(`
> <:sulike:1192079393154138183> | **Unlocked Channel**
> **Channel Name** : <#${interaction.channel.id}>
> **unLocked By** : <@${interaction.user.id}>`)
.setColor("WHITE")
.setTimestamp()

 interaction.editReply({ embeds: [locked] })
});
}
}
