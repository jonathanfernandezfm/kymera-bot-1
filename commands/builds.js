const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Builds',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('builds').setPlaceholder('⬇️ Selecciona una opción').addOptions(
				{
					label: 'Caerleon',
					description: 'Captura de puestos avanzados rivales',
					value: 'caerleon',
					emoji: '🐺',
				},
				{
					label: 'ZvZ',
					description: 'Batallas a gran escala',
					value: 'zvz',
					emoji: '⚔️',
				},
				{
					label: 'Roaming',
					description: 'Pelea en mundo abierto',
					value: 'roaming',
					emoji: '☠️',
				},
				{
					label: 'Magos',
					description: 'Captura de embotelladas',
					value: 'magos',
					emoji: '🧙‍♂️',
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
