const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'boton',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId('boton')
				.setLabel('Rellenar formulario 📝')
				.setStyle(ButtonStyle.Success)
		);

		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription(
				'\n\n ⚔️ '
			)

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **BIENVENIDO AL SISTEMA DE RECLUTAMIENTO**\n➥ si ya has rellenado el formulario accede al canal <#1003699282420961380>\nㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};


