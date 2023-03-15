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
				}
			)
		);

		const embed = new EmbedBuilder()

			.setColor("#057DD2")
      
			.setDescription(
				'\n\n<:portal:1050583981608943676> ‎ Actualmente nuestro contenido y actividades grupales se enfocan en el portal de Thetford. \n\n :compass: ‎ Podrás acceder a la isla privada del gremio mediante el planificador de viajes y seleccionando **"Isla de Kymera Thetford"**.\n\n<:opcion:1076525812930576403> ‎ Para ver los diferentes apartados que hay disponible actualmente, **haz click en el menú desplegable** de abajo.\n'
			)
			.setImage('https://i.imgur.com/OV3KcX6.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **INFORMACIÓN GENERAL SOBRE HYDRA:**\n➥ Actividades que realizamos, objetivos, hideout, terminología...\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
      
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
