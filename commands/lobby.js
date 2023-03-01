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
					.setStyle(ButtonStyle.Secondary),
	
			);
    
		const embed = new EmbedBuilder()
			.setColor("#4E5058")
			.setDescription(
				'\n\n🥋‎ Kymera es una comunidad de habla hispana con actividad en horario europeo que fue creado con la finalidad de pasarlo bien entre sus integrantes, conocer gente y formar un ambiente sano y agradable para jugar. La intención principal es mantener una comunidad española en diversos juegos como Albion Online, Guild of wars 2... y poder extender nuestros conocimientos a la formación de nuevos integrantes.'
			)

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **BIENVENIDO A KYMERA**\n➥ si cumples con los requisitos mínimos solicita tu rol\nㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};


