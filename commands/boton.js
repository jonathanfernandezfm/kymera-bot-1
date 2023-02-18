const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'boton',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {
		
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
			)
    
		const embed = new EmbedBuilder()
			.setColor("#057DD2")
			.setDescription(
				'\n\n> `🥋` Aquí encontrarás información esencial sobre los roles más utilizados actualmente en el gremio y las armas principales que cada integrante tiene al 100 de especialización.\n\n> `🔹` Con el tiempo los roles podrán variar en función de los cambios del juego, por si se añade o elimina alguno. \n\n> `⚔️` Si crees que cumples los requisitos para obtener un rol haz click en la tercera opción del menú para seguir con el proceso.\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n➡️ [ACCEDER AL EXCEL DE TODOS LOS ROLES](https://docs.google.com/spreadsheets/d/15PcYWGCbSi3bipMbkd4u2wctATJ4ZunRkNkgqD34fow/edit#gid=0)\n\n`📩` Contacta con un <@&1015944979136389190> o <@&1015942996455325719> para aparecer en la lista del gremio y asignarte el rol correspondiente.\n\n*(En esta lista solo aparecen armas principales de 100-120)*\n'
			)

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **BIENVENIDO AL SISTEMA DE RECLUTAMIENTO**\n➥ si ya has rellenado el formulario accede al canal <#1003699282420961380>\nㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};


