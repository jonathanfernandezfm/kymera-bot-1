const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'decalogo',
	description: 'Crea mensaje de reglas',
	execute: async (msg) => {

    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('d1')
					.setLabel('Deber de respeto')
        .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
.addComponents(
				new ButtonBuilder()
					.setCustomId('d2')
					.setLabel('Deber de Compromiso')
  .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
				)
.addComponents(
				new ButtonBuilder()
					.setCustomId('d3')
					.setLabel('Libertad de expresión')
  .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
      const row1 = new ActionRowBuilder()
    .addComponents(
				new ButtonBuilder()
					.setCustomId('d4')
					.setLabel('Ayuda a los miembros')
      .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
    .addComponents(
				new ButtonBuilder()
					.setCustomId('d5')
					.setLabel('Remoción por inactividad')
      .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
     .addComponents(
				new ButtonBuilder()
					.setCustomId('d6')
           .setLabel('Actividades obligatorias')
       .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
    const row2 = new ActionRowBuilder()
    .addComponents(
				new ButtonBuilder()
					.setCustomId('d7')
					.setLabel('Economía del gremio')
      .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
    .addComponents(
				new ButtonBuilder()
					.setCustomId('d8')
					.setLabel('Discord obligatorio')
      .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
     .addComponents(
				new ButtonBuilder()
					.setCustomId('d9')
           .setLabel('Actitud Hydra')
       .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)
.addComponents(
				new ButtonBuilder()
					.setCustomId('d10')
           .setLabel('Rangos de Hydra')
       .setEmoji('1050727155908223016')
					.setStyle(ButtonStyle.Secondary),
       
			)

    
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })
await msg.channel.send({
			content: 'https://i.imgur.com/8w2xug5.png',
   })
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
})
    
await msg.channel.send({
			components: [row],
		})
    
await msg.channel.send({
			components: [row1],
		})
    await msg.channel.send({
			components: [row2],
		})
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
})

		await msg.delete();
	},
};


