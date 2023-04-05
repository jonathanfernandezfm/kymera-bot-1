const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'newali',
	description: 'Crea mensaje de alianza',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId('formularioes')
				.setLabel('🤝🏻 Solicitar alianza')
				.setStyle(ButtonStyle.Secondary)
		)

    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',

       
    })

    await msg.channel.send({
			content: 'https://i.imgur.com/Xm52FOP.png',
   })
await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
})
await msg.channel.send({
			content: '`Actualmente no contamos con ninguna alianza`\n\n :flag_es: **ES:**  Si estás interesado en formar alianza con **Hydra** rellena la solicitud con los datos requeridos para seguir con el proceso. Pronto recibirás una respuesta. \n\n :flag_us: **EN:**  If you are interested in forming an alliance with **Hydra** fill out the application with the information requested to continue with the process. You will soon receive an answer',
})
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
      })
await msg.channel.send({

			components: [row],

		});

		await msg.delete();
	},
};
