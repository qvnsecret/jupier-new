const { MessageEmbed } = require(`discord.js`)

module.exports = {
  name: "help",
  category: "general",

  description: "Shows help command",
  options: [],
  run: async (client, interaction, args) => {

    let economyCmds = "";
    let generalCmds = "";
    let modCmds = "";
    client.commands.filter(c => c.category == "economy").map(cmd => {
        economyCmds += `> /${cmd.name} :: ${cmd.description} \n`;
    });

    client.commands.filter(c => c.category == "general").map(cmd => {
        generalCmds += `> /${cmd.name} :: ${cmd.description} \n`;
    });

    client.commands.filter(c => c.category == "mod").map(cmd => {
        modCmds += `> /${cmd.name} :: ${cmd.description} \n`;
    });



    const embed = new MessageEmbed()
        .setColor(`WHITE`)
        .setAuthor(`${client.user.tag} | ${interaction.guild.name}` , interaction.guild.iconURL({dynamic : true}))
        .addField(`<:sueuro:1192590664458838067> ECONOMY COMMANDS`, economyCmds)
        .addField(`<:suhome:1192079154817024060> GENERAL COMMANDS`, generalCmds)
        .addField(`<:suban:1192142284263800935> MODERATION COMMANDS`, modCmds)
        .setFooter({
          text: `${client.user.username} • Asked by ${interaction.user.tag}`,
          iconURL: client.user.displayAvatarURL()
          })
          .setTimestamp()

    await interaction.editReply({embeds: [embed]})
  }

}