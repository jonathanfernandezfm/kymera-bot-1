const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'inicio',
	description: 'Inicio',
	execute: async (msg) => {

		const embed = new EmbedBuilder()

			.setColor("#057DD2")
			.setDescription(
				':speech_balloon:‎ ‎ La opinión de los miembros que de verdad **participen, colaboren y creen contenido para los integrantes del gremio** tendrá más peso en nuestra comunidad.\n\n:medal: ‎**Funcionamos por** [Meritocracia](https://i.imgur.com/f3fuEui.png), y siempre teniendo en cuenta en todo momento la <#1047954545587802182> de rangos básica.\n\n<:restar:1047921057874575431>‎‎  Si vais a restar, estáis invitados a buscar una nueva guild que consideréis mejor, **nadie está obligado a nada**.\n\n💻  **Recordad que es un juego**, somos personas, cada uno tiene su vida y sus dramas, aquí jugamos para pasarlo bien, disfrutar, mejorar y sobre todo **Caerleon y PvP**.'
			)
			.setImage('https://i.imgur.com/Pqlpizs.png');

    const row = new ActionRowBuilder()
      .addComponents(
    new ButtonBuilder()
					.setURL('https://albiononline.com/home')
        .setEmoji("1070505218984378438")
					.setLabel('Kymera Guild Website')
					.setStyle(ButtonStyle.Link)
        .setDisabled(true),
        
			)
      
    .addComponents(
    new ButtonBuilder()
					.setURL('https://albiononline.com/home')
      .setEmoji("1070505555363377163")
					.setLabel('Albion Online Website')
					.setStyle(ButtonStyle.Link),
			);
    
		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>‎ ‎ **PARA CUALQUIER QUEJA/DUDA/SUGERENCIA**:\n➥ accede al canal habilitado <#1019528713571938344>\nㅤ    ',
      
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};