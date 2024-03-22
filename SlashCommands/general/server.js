const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Get info about server',
	timeout: 3000,
	category: 'general',
run: async(client, interaction, args)=> {
		const embed = new Discord.MessageEmbed()
			.setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
			.setColor('WHITE')
			.setThumbnail(interaction.guild.iconURL({ dynamic: true }))
			.addFields(
				{
					name: '<:suid:1193292758828462141> Server ID:',
					value: interaction.guild.id,
					inline: false,
				},
				{
					name: '<:sucalendar:1193292604251570357> Created On:',
					value: `<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:f> | <t:${Math.floor(
						interaction.guild.createdTimestamp / 1000,
					)}:R>`,
					inline: false,
				},
				{
					name: '<:sucrown:1192079716954411019> Owned By:',
					value: `<@${interaction.guild.ownerId}>`,
					inline: false,
				},
				{
					name: `<:suusers:1192079885200531537> Members: (${interaction.guild.memberCount})`,
					value: `${interaction.guild.premiumSubscriptionCount} Boosts <:sustar:1193486753047269408>`,
					inline: false,
				},
				{
					name: `<:sububble:1193487130215841792> Channels (${interaction.guild.channels.cache.size})`,
					value: `**${interaction.guild.channels.cache.filter((r) => r.type == 'GUILD_TEXT').size}** Text | **${
						interaction.guild.channels.cache.filter((r) => r.type == 'GUILD_VOICE').size
					}** Voice | **${interaction.guild.channels.cache.filter((r) => r.type === 'GUILD_CATEGORY').size}** Category`,
					inline: false,
				},
				{
					name: '<:suworld:1193487420826583060> Others',
					value: `**Verification Level:** ${interaction.guild.verificationLevel}`,
					inline: false,
				},
			);
		interaction.editReply({
			embeds: [embed],
		});
	},
};