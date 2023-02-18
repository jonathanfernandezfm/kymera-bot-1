const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'alianza',
	description: 'Alianza',
	execute: async (msg) => {

		const embed = new EmbedBuilder()
			
			.setColor("#057DD2")
			.setDescription(
				'> 🤝 Actualmente no contamos con ninguna alianza.'
			)
			.setImage('https://i.imgur.com/dF7016s.png');

		await msg.channel.send({
			content: '⠀',
			ephemeral: true,
			embeds: [embed],
		});

		await msg.delete();
	},
};
