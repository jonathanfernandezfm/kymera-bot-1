const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'isla',
	description: 'Informacion interaction',
	execute: async (interaction) => {
		const embed_objectives = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                     ❮❮     COFRES PERSONALES    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor("386CE5") //
			.setDescription(
				'`🧭` Aquí encontrarás la distribución de los __**cofres personales**__ que tiene cada integrante de Kymera. <@&1015944979136389190> y <@&1015942996455325719> se encargarán de repartir las partes del loot que no han sido reclamadas anteriormente y se han quedado en el cofre general de la isla.\n\n`📩` Contacta con un <@&1015944979136389190>, <@&1015942996455325719> o <@&1015296284359413842> para la creación de un nuevo cofre personal si aún no te han asignado uno.\n\n`🟩 Sector 1 - Integrantes`\n\n> - (1) BkNcs‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - (8) Awakenes\n> - (2) Valdeandemagico‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (9) GarothUrsul \n> - (3) Kertsh‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (10) Faragnir\n> - (4) ErOliTheLegend‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (11) Chymo\n> - (5) Hysterykoㅤㅤ\n> - (6) Longarden\n> - (7) NeloLXlV\n \n\n`🟦 Sector 2 - Integrantes`\n\n> - (1) ‎SntkaLi  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - (8) Vatidos\n> - (2) ‎Waitmask ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ - (9) Fentark\n> - (3) DrHiruluk‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (10) Lujedom\n> - (4) Kaerly‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎- (11) TyReX122\n> - (5) LkaLilith‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ - (12) DrHirulukㅤㅤ\n> - (6) PesimosSA\n> - (7) Poakkk\n\n\n`🟨 Sector 3 - Integrantes`\n\n> - (1) Jhalu‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - (8) AaronCR\n> - (2) DanielOreo‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - (9) AeroO15\n> - (3) Kayn17‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ \n> - (4) Blackfoenix‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \n> - (5) Yulipo\n> - (6) Calaverasp\n> - (7) TENGORABO\n\n\n`🟧 Sector 4 - Administración`\n'
			)
			.setImage('https://i.imgur.com/LpRs2u3.png');

		const embed_caerleon = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                     ❮❮    FACCIÓN CAERLEON    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor("386CE5") //
			.setDescription(
				'<:icono_Caerleon:1037142309696962690> Nos enfocamos en la facción de Caerleon\n\n> Es una actividad que realizamos frecuentemente para la obtención de puntos de facción y así mismo hacer economía y aprender en cuanto a posicionamiento en peleas a baja escala. No es obligatorio asistir, pero sí aconsejable. \n\n> No importa si mueres, el <#1015940190583402506> hace que se pueda reequipar si el jugador tiene el mínimo requerido.\n\n> Para poder distinguir a los jugadores que cumplen los requisitos de los que no, se hará por el rol  de "Caerleon" con su respectivo icono.\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n`⚔️`  **El mínimo recomendado y para optar a regear:**\n\n``` Mínimo de IP con la build equipada ➟ +1200\n Ramas de arma principal al 75 de spec ➟ 2```'
			)
			.setImage('https://i.imgur.com/4YvKhHO.png');

		const embed_hideout = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                  ❮❮    HIDEOUT    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor("386CE5") //
			.setDescription(
				'> <:icono_hideout:1034077724710535198> **Actualmente nuestro HO se encuentra en __Dryvein Cross__**\n> [Para acceder a la ruta más rápida desde el portal de Bridgewatch](https://i.imgur.com/0Xbp3oF.png)'
			)
			.setImage('https://i.imgur.com/uxktgRm.png');

		switch (interaction.values[0]) {
			case 'objectives':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_objectives],
				});
			case 'fac_caerleon':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_caerleon],
				});
			case 'hideout':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_hideout],
				});
			default:
				return;
		}
	},
};
