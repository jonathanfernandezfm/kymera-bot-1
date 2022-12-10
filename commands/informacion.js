const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'informacion',
	description: 'Informacion',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('informacion').setPlaceholder('Seleccionar una opción').addOptions(
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
				'\n\n<:portal:1050583981608943676> ‎ Actualmente nuestro contenido se enfoca en el portal de Martlock. Podrás acceder a la isla privada del gremio mediante el **planificador de viajes** y seleccionando **"Isla de Kymera Martlock"**.\n\n<:raton:1050588057696469072> ‎Para ver los diferentes apartados que hay disponible actualmente, **haz click en el menú desplegable** de abajo.\n'
			)
			.setImage('https://i.imgur.com/WMOBXgc.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>‎ ‎ **AQUÍ ENCONTRARÁS INFORMACIÓN ESENCIAL SOBRE:**\n\n➠ ***Tipo de contenido*** que realizamos                      ➠ ***Zona actual*** por la que nos movemos\n➠ ***Objetivos*** de la siguiente season                          ➠ ***Hideout*** y su localización\n➠ ***Puntos importantes*** a tener en cuenta.⠀          ➠ ***Terminología*** que utilizamos\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
