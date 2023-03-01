const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'lobby',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {

    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('albion')
					.setLabel('Albion Online')
          .setEmoji('1077376462811836448')
					.setStyle(ButtonStyle.Secondary),
        )
        .addComponents(
				new ButtonBuilder()
					.setCustomId('guildwars')
					.setLabel('Guild Wars 2')
          .setEmoji('1077372561010200738')
					.setStyle(ButtonStyle.Secondary)
          .setDisabled(true),
        
	
			);
    
		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription('🔓‎ **Desbloquea los canales seleccionando los juegos disponibles**')
			
    .setImage('https://i.imgur.com/KZlfbHo.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **NUESTROS JUEGOS MMORPG**\n➥ Para acceder a los canales elige entre los juegos disponibles\nㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};


