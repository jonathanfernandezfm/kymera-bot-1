const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'formulario',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId('formulario')
				.setLabel('Rellenar formulario')
				.setStyle(ButtonStyle.Success)
		);

		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription(
				'\n\n<:community:1076529619211124766> Si estás interesado en formar parte de **nuestra comunidad**, tienes ganas de ampliar tus conocimientos en PvP, y eres un jugador activo con ganas de aprender, lo único que tienes que hacer es **rellenar el formulario de ingreso.**\n\n<:decalogo:1050727155908223016> Antes de seguir con el proceso de reclutamiento es necesario que hayas leído el <#1039132556165124116> para tener un conocimiento previo sobre el **funcionamiento interno** de Kymera y sus **normas básicas.**\n\n ┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n<:requisitos:1050724589661061130>  **REQUISITOS MÍNIMOS PARA SER MIEMBRO**\n\n➠ **Horario europeo** (CEST, UTC +2)\n➠ **Jugador PVP mayormente**, con ganas de aprender y mejorar\n➠ **Persona activa** y con aportación al gremio\n\n ┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n✉️ **Si ya has rellenado el formulario**, contacta con un <@&1016042908257894460> en el canal habilitado <#1017359646828285994> para la **formalización de la entrevista, rol y permisos en discord.**\n'
			)
    .setImage('https://i.imgur.com/gkqpcQJ.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **BIENVENIDO AL SISTEMA DE RECLUTAMIENTO**\n➥ si ya has rellenado el formulario accede al canal <#1003699282420961380>\nㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
