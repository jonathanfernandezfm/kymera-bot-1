const { MessageButton } = require('discord.js');

module.exports = {
	name: 'progreso',
	description: 'Crea mensaje de reglas',
	execute: async (msg) => {

await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
     
    })
await msg.channel.send({
			content: 'https://i.imgur.com/MGSRgSn.png',
     })
await msg.channel.send({
			content: 'https://i.imgur.com/l0LpXnD.png',
})
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
   }) 
    
    await msg.channel.send({
			content: 'https://i.imgur.com/ZbaMV7F.png',

})
await msg.channel.send({
			content: '<@&1020271245339676753>  **__REQUISITOS__:**\n⠀⠀_» Fama PVP:_ \n⠀⠀_» Fama PVE:_ ',
  	
})
   
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
   
   })
    
		await msg.delete();
	},
};


