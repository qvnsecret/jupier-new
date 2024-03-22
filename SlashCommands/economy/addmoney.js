const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
        name: "addmoney",
        category: "economy",
        description: "add money for a user",
	options: [
		{
			name: 'user',
			description: 'User to add moeny',
			type: 6,
      required : true,
		},
{
  			name: 'input',
  			description: 'amout to be added ',
  			type: 3,
  			required: true,
},
	],
  run: async(client, interaction, args)=> {
 let  owners = ['1122953244168159285']
		const user = interaction.options.getMember('user')
    const input = interaction.options.getString('input')
          if(!owners.includes(interaction.user.id)) return await interaction.editReply("helpppppppppppp please helppppppppppppp")

      if(user.user.bot) return interaction.editReply({content :`You can't use this command with bot.<:sudislike:1192079445956239401>`});
        if (isNaN(input)) return interaction.editReply({content :"Enter a valid amount. <:sudislike:1192079445956239401>"});
        if(input.startsWith('-') ||input.startsWith('/') || input.startsWith('*') || input.startsWith('+')) return interaction.editReply({content : `${input} is not a valid number.`})
        if (input > 9999999) return interaction.editReply({content : "You are not supposed to be that rich <:sulock:1192130190550249472> | Limit `1 million` "})
        db.add(`money_${user.id}`, input)
        let bal = db.fetch(`money_${user.id}`)
        let moneyEmbed = new MessageEmbed()
            .setColor("WHITE")
            .setTitle(`<:sueuro:1192590664458838067> Success:`)
            .setDescription(`User: ${user},\nAmount: ${input},\nNew balance: ${bal}.`);
        interaction.editReply({embeds : [moneyEmbed]})

    }
}