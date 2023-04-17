const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'newali',
	description: 'Crea mensaje de alianza',
	execute: async (msg) => {
		

    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })

    await msg.channel.send({
			content: 'https://i.imgur.com/gGUdYQk.png',
})
await msg.channel.send({
			content: 'https://i.imgur.com/2g8FxEM.png',
})
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
      })
    await msg.channel.send({
			content: '**[RUF] Enlace al discord de la alianza: **discord.gg/FhHFYnXCqp',
		});

		await msg.delete();
	},
};
