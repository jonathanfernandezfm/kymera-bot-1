const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'dnt',
	description: 'Crea mensaje de reglas',
	execute: async (msg) => {

    const row = new ActionRowBuilder()
      .addComponents(
				new ButtonBuilder()
					.setURL('https://discord.com/channels/1003645231373226026/1015940451410378832')
        
					.setLabel('🎭 Cómo obtener el rol de actividades')
					.setStyle(ButtonStyle.Link),
					)
         const row1 = new ActionRowBuilder()
      .addComponents(
				new ButtonBuilder()
					.setURL('https://discord.com/channels/1003645231373226026/1085584544708702239')
        
					.setLabel('💸 Foro DNT')
					.setStyle(ButtonStyle.Link),
       
  
    )
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
     
    })
await msg.channel.send({
			content: 'https://i.imgur.com/7NEflrh.png',
})
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
})
await msg.channel.send({
			content: '🪙 **Nuestro sistema Death&taxes consiste en el reequipamiento de:**\n```Equipo usado en la actividad por un valor de 250K```\n:mens:  **Piezas de equipo que reembolsamos**: \n```Arma principal, casco, armadura, botas y capa```\n:repeat:  Para poder optar a reequipamiento hay que cumplir unos requisitos mínimos, y obtener cualquiera de los roles <@&1020635840327729196>/<@&1020636374589788190>\n\n',
  	
})
  	await msg.channel.send({
			components: [row],
})
   
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
   })
      await msg.channel.send({
			content: '💸 Cada vez que el líder del evento cree un nuevo apartado en el foro **debes de enviar una captura de pantalla de cada muerte justo después de haber finalizado este**. No esperes un día para publicar tu muerte, hazlo de inmediato o no obtendrás DNT.',
})
   
      	await msg.channel.send({
			components: [row1],
})
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
   })
    await msg.channel.send({
			content: 'https://i.imgur.com/LDv9prA.png',
   })
  
    
		await msg.delete();
	},
};


