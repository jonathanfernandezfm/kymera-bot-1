const { ActionRowBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'leeme',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {

    
		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription(
				'\n\n <:ayuda:1045652052400939078>  **__¿QUÉ ES HYDRA?__** \n\n **➠**‎ **Hydra es una comunidad de habla hispana** con actividad en horario europeo que fue creado con la finalidad de conocer gente, pasarlo bien entre sus integrantes y formar un ambiente sano y agradable.\n\n\ **➠**‎ **La intención principal** es mantener una comunidad española de diversos juegos, principalmente **Albion Online** y poder seguir expandiéndonos poco a poco. \n\n -------------------------- \n\n `El hecho de acceder al discord significa que has leído, entendido y aceptado en su totalidad las mismas y puedes ser expulsado en cualquier momento`'
			)
    .setImage('https://i.imgur.com/OV3KcX6.png');
    
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n <:community:1076529619211124766>  **BIENVENIDO AL DISCORD OFICIAL DE HYDRA**\n➥ Es necesario que leas las <#1077569645147590710> del discord.\nㅤ    ',
			embeds: [embed],
    });

		await msg.delete();
	},
};


