const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'formulario',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId('formulario')
				.setLabel('Rellenar formulario de ingreso')
				.setStyle(ButtonStyle.Secondary)
		)
 
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })

    await msg.channel.send({
			content: 'https://i.imgur.com/elQcFok.png',
   })
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
})
await msg.channel.send({
			content: '<:community:1076529619211124766> Si estás interesado en formar parte de **nuestra comunidad**, tienes ganas de ampliar tus conocimientos en PvP, y eres un jugador activo con ganas de aprender, lo único que tienes que hacer es **rellenar el formulario de ingreso.**\n\n<:decalogo:1050727155908223016> Antes de seguir con el proceso de reclutamiento es necesario que hayas leído el <#1085547437239849010> para tener un conocimiento previo sobre el **funcionamiento interno** de Hydra y sus **normas básicas.**\n\n<:requisitos:1050724589661061130>  **REQUISITOS MÍNIMOS PARA SER MIEMBRO**\n\n➠ **Horario europeo** (CEST, UTC +2)\n➠ **Jugador PVP mayormente**, con ganas de aprender y mejorar\n➠ **Persona activa** y con aportación al gremio\n\n',
})
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
      })
await msg.channel.send({

			components: [row],
  })
    
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n✉️ **Si ya has rellenado el formulario**, contacta con el rango <@&1016042908257894460> en el canal habilitado <#1015941287310016604> para la **formalización de la entrevista, rol y permisos en discord.**',

		});

		await msg.delete();
	},
};
