const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Builds',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('builds').setPlaceholder('Selecciona una opción').addOptions(
				{
					label: 'Facción Caerleon',
          description: 'Composición para Caerleon outpost',
					value: 'caerleon',
					emoji: '🐺',
				},
				{
					label: 'Ganking2',
          description: 'Composición para gankear en open world',
					value: 'gank',
					emoji: '<:gank:1055567880646832229>',
				},
				{
					label: 'Crystal 5V5',
          description: 'Composición para Crystals GvG 5V5',
					value: 'roaming',
					emoji: '<:gvg:1055565301531562004>',
				},
				{
					label: 'Magos embotelladores',
          description: 'Composición para puestos de magos embotelladores',
					value: 'magos',
					emoji: '<:embotelladas:1042738321643814932>',
				},
        {
					label: 'Avalonianas',
           description: 'Composición para mazmorras avalonianas',
					value: 'avalonianas',
					emoji: '<:avaloniana:1042749185604210748>',
				}
			)
		);

		const embed = new EmbedBuilder()
			
			.setColor("#057DD2")
			.setDescription(
				'<:escudo:1052552686593122334> Aquí encontrarás información importante sobre la **composición de builds** que usamos para cada actividad. Si crees que existen errores o siemplemente quieres sugerir cambios o agregar nuevas composiciones, contacta con <@&1015942996455325719> o <@&1015944979136389190>\n'
			)
			.setImage('https://i.imgur.com/AmVXeJg.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **AYUDA SOBRE BUILDS Y COMPOSICIONES:**\n➥ última actualización 22/12/2022\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
			ephemeral: true,
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
