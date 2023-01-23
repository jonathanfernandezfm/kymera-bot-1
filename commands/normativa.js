const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'normativa',
	description: 'Normativa',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('normativa').setPlaceholder('Seleccionar una opción').addOptions(
				{
					label: 'Normativa General',
					value: 'general',
					emoji: '📔',
				},
				{
					label: 'Normativa Caerleon',
					value: 'ncaerleon',
					emoji: '📕',
				},
				{
					label: 'Normativa Fama',
					value: 'nfama',
					emoji: '📘',
				},
        {
					label: 'Normativa Avalonianas',
					value: 'navalonianas',
					emoji: '📒',
				}
			)
		);

		const embed = new EmbedBuilder()


			.setColor('386CE5') //
			.setDescription(
				'\n\n <:decalogo:1050727155908223016> Para el desarrollo de nuestras actividades existe una normativa diferente para cada una de ellas, por eso es de obligación tenerlas presente. \n\n 👥 **Todos los miembros del gremio** tienen el deber de respetar las normas generales en el desarrollo de las actividades del gremio, de lo contrario, el equipo de administración tomará medidas dependiendo del grado de desobediencia.'
			)
			.setImage('https://i.imgur.com/gc6xe6k.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **INFORMACIÓN GENERAL SOBRE NUESTRA NORMATIVA:**\n➥ lee nuestro <#1039132556165124116> de integrantes\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
      
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
