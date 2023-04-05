const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'normativa',
	description: 'Normativa',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('normativa').setPlaceholder('☰⠀Abrir menú de normativas').addOptions(
				{
					label: 'Normativa General',
					value: 'general',
					emoji: '1070748609852751954',
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
					emoji: '1070750558434103296',
				}
			)
		);

		const embed = new EmbedBuilder()


			.setColor('386CE5') //
			.setDescription(
				'\n\n <:decalogo:1050727155908223016> Para el desarrollo de nuestras actividades existe una normativa vigente que es de obligación cumplir. \n\n 👥 **Todos los miembros del gremio** tienen el deber de respetar las normas generales en el desarrollo de las actividades del gremio, de lo contrario, el equipo de administración tomará medidas.'
			)
			.setImage('https://i.imgur.com/2nHSpMW.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **INFORMACIÓN GENERAL SOBRE NUESTRA NORMATIVA:**\n➥ Lee nuestro <#1085547437239849010> de miembros.\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
      
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
