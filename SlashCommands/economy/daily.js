const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("pretty-ms");

module.exports = {
    name: "daily",
    category: "economy",
    description: "get daily money",
    options: [],
    run: async (client, interaction, args) => {
        let user = interaction.member;
        let timeout = 86400000;
        var amount = Math.floor(Math.random() * 5000)
        let daily = await db.fetch(`daily_${user.user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setColor("WHITE")
                .setDescription(`You can collect your daily again in ${time}. <:suhome:1192079154817024060>`);
            interaction.editReply({ embeds: [timeEmbed] })
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("WHITE")
                .setDescription(`You've collected your <:sueuro:1192590664458838067> ${amount} from daily.`);
            interaction.editReply({ embeds: [moneyEmbed] })
            db.add(`money_${user.user.id}`, amount)
            db.set(`daily_${user.user.id}`, Date.now())


        }
    }
}