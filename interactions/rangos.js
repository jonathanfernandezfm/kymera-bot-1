const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'rangos',
	description: 'Rangos interaction',
	execute: async (interaction) => {
		const embed_rangosadm = new EmbedBuilder()
			.setColor('#d20808')
			.setThumbnail('https://i.imgur.com/sxOHVjt.png')
			.setDescription(
				'<@&1015296284359413842> : Fundador de la guild, encargado de los asuntos internos y del asesoramiento de todos los permisos, roles y administración del gremio.'
			);

		const embed_rangosadm1 = new EmbedBuilder()
			.setColor('#e7802c')
			.setThumbnail('https://i.imgur.com/l2yPJjA.png')
			.setDescription(
				'<@&1015942996455325719> : Los asesores del Guild Master, se encargan de los asuntos diarios del gremio. Trabajan en estrecha colaboración con el Guild Master para asegurar los objetivos de Kymera y con el tesorero para asegurar una economía estable.'
			);

		const embed_rangosadm2 = new EmbedBuilder()
			.setColor('#f1c72e')
			.setThumbnail('https://i.imgur.com/cw5nnBE.png')
			.setDescription(
				'<@&1015944979136389190> : Ejercen la función de liderazgo general, asegurándose de que todos se comporten correctamente y se diviertan, responder dudas y ayudar en el día a día.'
			);

		const embed_rangosadm3 = new EmbedBuilder()
			.setColor('#ffff43')
			.setThumbnail('https://i.imgur.com/tLY5DVy.png')
			.setDescription(
				'<@&1016011655957729331> : Gerentes financieros del gremio. El trabajo del tesorero es asegurarse de que la economía de Hydra está equilibrada de la mejor manera posible y así mismo, mantener las estructuras funcionales como Hideout y Territorios.'
			);

		const embed_rangosadm4 = new EmbedBuilder()
			.setColor('#A96621')
			.setThumbnail('https://i.imgur.com/sref72i.png')
			.setDescription(
				'<@&1016042360053973052> : Persona con experiencia comunicativa y conocimiento elevado en batallas de mundo abierto. Su función es liderar a los grupos en incursiones a castillos, ZvZ a media escala, magos, puestos avanzados...'
			);

		const embed_rangosadm5 = new EmbedBuilder()
			.setColor('#9f6cb4')
			.setThumbnail('https://i.imgur.com/HGCEKS8.png')
			.setDescription(
				'<@&1016042908257894460> : Se asegura de la administración de las solicitudes, asesorar y reclutar nuevos miembros. Revisan de que estos cumplan con los requisitos mínimos requeridos y que el proceso sea rápido y fluido.'
			);

		const embed_rangosadm6 = new EmbedBuilder()
			.setColor('#723288')
			.setThumbnail('https://i.imgur.com/JlsqOgU.png')
			.setDescription(
				'<@&1020660198186160138> : Es el responsable de la organización de los grupos relacionados con las actividades PvP/PvE dentro del gremio, dar contenido y revisar que todo esté en orden para el desarrollo de estas.'
			);

		const embed_rangosuser1 = new EmbedBuilder()
			.setColor('#3498db')
			.setThumbnail('https://i.imgur.com/lNoJeTQ.png')
			.setDescription(
				'<@&1016043768916488222> : Miembros más antiguos y fieles que ya han adquerido experiencia en el juego y a su vez forman el core principal del gremio.'
			);

		const embed_rangosuser2 = new EmbedBuilder()
			.setColor('#578b42')
			.setThumbnail('https://i.imgur.com/tRXSKNx.png')
			.setDescription(
				'<@&1016043570773381190> : Miembros fijos que llevan cierto tiempo dentro del gremio y tienen un peso considerable. Componen las actividades diarias junto con los veteranos y gozan de permisos especiales dentro del juego. '
			);

		const embed_rangosuser3 = new EmbedBuilder()
			.setColor('#4cff05')
			.setThumbnail('https://i.imgur.com/Z5ON3Gi.png')
			.setDescription(
				'<@&1016043481183031397> : Miembros que han pasado satisfactoriamente el periodo de prueba y siguen formándose dentro del juego.'
			);

    const embed_rangosuser4= new EmbedBuilder()
			.setColor('#21CD76')
			.setThumbnail('https://i.imgur.com/1tDW7be.png')
			.setDescription(
				'<@&1086242674027274361> : Integrantes que recién entran en el gremio y que tendrán un periodo de prueba de (2) semanas.'
			);

		const embed_vacantes = new EmbedBuilder()
			
			.setColor('386CE5') //
			.setDescription(
				'ㅤㅤㅤㅤ\nㅤㅤㅤㅤ📝 **VACANTE A MODERACIÓN** ➠  🟥\n\nㅤㅤㅤㅤ📝 **VACANTE A RECLUTADOR** ➠ 🟩\n\nㅤㅤㅤㅤ📝 **VACANTE A CREADOR DE CONTENIDO** ➠ 🟩\n\nㅤㅤㅤㅤ📝 **VACANTE A CALLER** ➠ 🟩\n\n\n✉️ Contacta por MD para solicitar una vacante:\n<@&1015296284359413842> | <@&1015942996455325719> | <@&1015944979136389190>'
			)
			.setThumbnail('https://i.imgur.com/dseIYuM.png');

		switch (interaction.values[0]) {
			case 'distribucion':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [
						embed_rangosadm,
						embed_rangosadm1,
						embed_rangosadm2,
						embed_rangosadm3,
						embed_rangosadm4,
						embed_rangosadm5,
						embed_rangosadm6,
					],
				});
			case 'reparto':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_rangosuser1, embed_rangosuser2, embed_rangosuser3, embed_rangosuser4],
				});
			case 'reclamar':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_vacantes],
				});
			default:
				return;
		}
	},
};
