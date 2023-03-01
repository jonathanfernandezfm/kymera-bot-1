const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'leeme',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {

    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('registro')
					.setLabel('He leído las reglas y acepto registrarme')
					.setStyle(ButtonStyle.Success),
	
			);
    
		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription(
				'\n\n **El hecho de acceder al discord significa que has leído, entendido y aceptado en su totalidad las mismas y puedes ser expulsado en cualquier momento.** \n\n <:ayuda:1045652052400939078> **__¿QUÉ ES KYMERA?__** \n\n **➠**‎ **Kymera es una comunidad de habla hispana** con actividad en horario europeo que fue creado con la finalidad de conocer gente, pasarlo bien entre sus integrantes y formar un ambiente sano y agradable.\n\n\ **➠**‎ **La intención principal** es mantener una comunidad española de diversos juegos (Albion Online, Guild of wars 2,  Throne and Liberty) y seguir expandiéndonos poco a poco.'
			)
    .setImage('https://i.imgur.com/OV3KcX6.png');
    
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n <:community:1076529619211124766>  **BIENVENIDO A LA COMUNIDAD DE KYMERA**\n➥ Es necesario que leas las <#1077569645147590710> y te registres para acceder a los canales\nㅤ    ',
			embeds: [embed],
			components: [row],
    });

		await msg.delete();
	},
};


