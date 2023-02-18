const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'informacion',
	description: 'Informacion',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('informacion').setPlaceholder('☰⠀Abrir menú de información general').addOptions(
        {
					label: 'Acrónimos y siglas de Albion',
					value: 'terminos',
					emoji: '🔠',
				},
				{
					label: 'Objetivos de la season',
					value: 'objectives',
					emoji: '🎯',
				},
				{
					label: 'Facción Caerleon',
					value: 'fac_caerleon',
					emoji: '🐺',
				},
				{
					label: 'Localización del hideout',
					value: 'hideout',
					emoji: '1049649692377612348',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setColor("#057DD2")
      
			.setDescription(
				'\n\n<:portal:1050583981608943676> ‎ Actualmente nuestro contenido y actividades grupales se enfocan en el portal de Martlock. \n\n :compass: ‎ Podrás acceder a la isla privada del gremio mediante el planificador de viajes y seleccionando **"Isla de Kymera Martlock"**.\n\n<:opcion:1070514429105545218> ‎ Para ver los diferentes apartados que hay disponible actualmente, **haz click en el menú desplegable** de abajo.\n'
			)
			.setImage('https://i.imgur.com/1HLf44Q.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **INFORMACIÓN GENERAL SOBRE KYMERA:**\n➥ actividades que realizamos, objetivos, hideout, terminología...\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
      
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
