const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Builds',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder()
				.setCustomId('builds')
				.setPlaceholder('⬇️ Selecciona que builds quieres ver')
				.addOptions(
					{
						label: '🐺 Caerleon',
						description: 'This is a description',
						value: 'caerleon',
					},
					{
						label: '⚔️ ZvZ',
						description: 'This is also a description',
						value: 'zvz',
					},
					{
						label: '☠️ Roaming',
						description: 'This is a description',
						value: 'roaming',
					},
					{
						label: '🧙‍♂️ Magos',
						description: 'This is also a description',
						value: 'magos',
					}
				)
		);

		const embed = new EmbedBuilder()
			.setColor(0x0099ff)
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

		await msg.channel.send({
			content: '',
			ephemeral: true,
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
