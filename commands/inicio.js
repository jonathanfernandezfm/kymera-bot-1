const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'inicio',
	description: 'Inicio',
	execute: async (msg) => {

    const row = new ActionRowBuilder()
      .addComponents(
    new ButtonBuilder()
					.setURL('https://hydraguild.webcindario.com/')
        .setEmoji("1070505218984378438")
					.setLabel('Hydra Guild Website')
					.setStyle(ButtonStyle.Link),
        
			)
      
    .addComponents(
    new ButtonBuilder()
					.setURL('https://albiononline.com/home')
      .setEmoji("1070505555363377163")
					.setLabel('Albion Online Website')
					.setStyle(ButtonStyle.Link),
			);
    
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
      
		})
    
await msg.channel.send({
			content: 'https://i.imgur.com/qCOKhVc.png',

  
		})
    
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>‎ ‎ **PARA CUALQUIER QUEJA/DUDA/SUGERENCIA**:\n➥ Accede al canal habilitado <#1019528713571938344>',

  	})
    
		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n:speech_balloon:‎ ‎ La opinión de los miembros que de verdad **participen, colaboren y creen contenido para los integrantes del gremio** tendrá más peso en nuestra comunidad.\n\n:medal: ‎**Funcionamos por meritocracia** (rangos según méritos propios) y siempre teniendo en cuenta en todo momento la <#1085582548010279032> de rangos básica.\n\n💻  **Recordad que es un juego**, somos personas, cada uno tiene su vida y sus dramas, aquí jugamos para pasarlo bien, disfrutar, mejorar y sobre todo **Caerleon y PVP**.\nㅤ    ',
      
			
			
		})
    
    await msg.channel.send({
			content: 'https://i.imgur.com/zLQF6On.png',
      
		})
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀',
		components: [row],
		});

		await msg.delete();
	},
};