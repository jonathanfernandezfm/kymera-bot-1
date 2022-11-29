const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Builds',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('builds').setPlaceholder('Selecciona una opción').addOptions(
				{
					label: 'Caerleon',
          description: 'Composición para Caerleon outpost',
					value: 'caerleon',
					emoji: '1047148562934407241',
				},
				{
					label: 'Builds ZvZ',
          description: 'Composición para peleas a gran escala',
					value: 'zvz',
					emoji: '1047150267893817415',
				},
				{
					label: 'Roaming',
          description: 'Composición para objetivos de mundo abierto',
					value: 'roaming',
					emoji: '1042750383954604032',
				},
				{
					label: 'Magos embotelladores',
          description: 'Composición para puestos de magos embotelladores',
					value: 'magos',
					emoji: '1042738321643814932',
				},
        {
					label: 'Avalonianas',
           description: 'Composición para mazmorras avalonianas',
					value: 'avalonianas',
					emoji: '1042749185604210748',
				}
			)
		);

		const embed = new EmbedBuilder()
			.setTitle('ㅤㅤㅤ                           ❮❮    BUILDS    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━')
			.setColor('#E9A6F2')
			.setDescription(
				'\n\n> `⚔️` Aquí encontrarás información importante sobre la composición de builds que usamos para cada actividad.\n\n> `⚠️` Para acceder a los apartados haz click en el menú de abajo para navegar entre las diferentes composiciones.\n'
			)
			.setImage('https://i.imgur.com/KuyLm6D.png');

		await msg.channel.send({
			content: 'ㅤ    ',
			ephemeral: true,
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
