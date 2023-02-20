const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, SelectMenuBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'boton',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {

    const boton = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('boton').setPlaceholder('☰⠀Abrir menú de información sobre roles').addOptions(
				{
					label: 'Requisitos mínimos de roles específicos',
					value: 'requisitos',
					emoji: '📋',
				},
				{
					label: 'Solicitar rol específico por ticket',
					value: 'reclamar',
					emoji: '🙋‍♂️',
				}
			)
		)

    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('tank')
					.setLabel('TANK')
          .setEmoji('1070777995553411082')
					.setStyle(ButtonStyle.Primary),
        )
        .addComponents(
				new ButtonBuilder()
					.setCustomId('healer1')
					.setLabel('NATURE')
          .setEmoji('1070779660587237476')
					.setStyle(ButtonStyle.Success),
			)
       
        .addComponents(
				new ButtonBuilder()
					.setCustomId('healer2')
					.setLabel('HOLY')
          .setEmoji('1070781230687203338')
					.setStyle(ButtonStyle.Success),

          )
       
        .addComponents(
				new ButtonBuilder()
					.setCustomId('rdps')
					.setLabel('RANGO')
          .setEmoji('1070784604639858798')
					.setStyle(ButtonStyle.Danger),
			)

       .addComponents(
				new ButtonBuilder()
					.setCustomId('mdps')
					.setLabel('MELEE')
          .setEmoji('⚔️')
					.setStyle(ButtonStyle.Danger),
			);
    
		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription(
				'\n\n🥋‎ Aquí encontrarás información esencial sobre los requisitos necesarios para obtener los roles específicos de actividades grupales y permisos de membresía. Con el tiempo los roles podrán variar en función de los cambios del juego, por si se añade o elimina alguno. \n\n⚔️‎ Si crees que cumples los requisitos para obtener un rol contacta con un <@&1015944979136389190> o <@&1015942996455325719> para que podamos asignártelo.\n\n'
			)

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **BIENVENIDO AL SISTEMA DE ROLES**\n➥ si cumples con los requisitos solicita tu rol\nㅤ    ',
			embeds: [embed],
			components: [boton, row],
		});

		await msg.delete();
	},
};


