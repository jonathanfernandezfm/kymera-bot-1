const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'informacion',
	description: 'Informacion',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('informacion').setPlaceholder('⬇️ Selecciona una opción').addOptions(
				{
					label: 'Objetivos de la season',
					value: 'objectives',
					emoji: '🏳️',
				},
				{
					label: 'Facción Caerleon',
					value: 'fac_caerleon',
					emoji: '1034506062868525057',
				},
				{
					label: 'Hideout',
					value: 'hideout',
					emoji: '🏠',
				}
			)
		);

		const embed = new EmbedBuilder()
			.setTitle('ㅤㅤㅤ         ❮❮    BIENVENIDO A KYMERA    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor(3697893)
			.setDescription(
				'\n\n> `🌐` Aquí encontrarás información esencial sobre el contenido que realizamos, objetivos de season, zona por la que nos movemos, hideout y puntos importantes a tener en cuenta.\n\n> `⚠️` Para ver los diferentes apartados que hay disponible actualmente, haz click en el menú desplegable de abajo.\n'
			)
			.setImage('https://i.imgur.com/f7IO2NK.png');

		await msg.channel.send({
			content: '',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
