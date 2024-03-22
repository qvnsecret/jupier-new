const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
        name: "leaderboard",
        category: 'economy',
        description: 'ik you poor',
        options: [],
run: async(client, interaction, args)=> {
        let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(interaction.member.displayName, interaction.author.displayAvatarURL())
                .setColor("WHITE")
                .setFooter("What do you think to get your daily?")
            return interaction.editReply({embeds : [noEmbed]})
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]) : money[i].ID.split('_')[1]}** - ${money[i].data} <:sueuro:1192590664458838067>\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`LEADERBOARD OF ${interaction.guild.name}`)
            .setColor("WHITE")
            .setDescription(finalLb)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setTimestamp()
        interaction.editReply({embeds :[embed]});
    }
};