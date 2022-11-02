const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'informacion',
	description: 'Informacion interaction',
	execute: async (interaction) => {
		const embed_objectives = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                  ❮❮    OBJETIVOS    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor(2535610)
			.setDescription(
				'`🎯` **Objetivos de la season 17**\n\n> 1️⃣⠀Realizar actividades con intención de  un mínimo de IP: 1200 (Roaming, caminos, ganking...)\n\n> 2️⃣⠀Llegar a 25k de puntos de temporada mínimo, con intención de llegar a 40k para subir de calidad.\n\n> 3️⃣⠀Contenido diario para subir armas principales, grupos de 20v20, 5v5, caminos avalonianos...  \n\n> 4️⃣⠀Ser más activos en zona negra para subir en el ranking y mantener el HO: Cofres, orbes, arañas...\n'
			)
			.setImage('https://i.imgur.com/2RuIEnW.png');

		const embed_caerleon = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                     ❮❮    FACCIÓN CAERLEON    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor(6235686)
			.setDescription(
				'<:icono_Caerleon:1034486619459309638> **Nos enfocamos en la facción de Caerleon**\n\n> Es una actividad que realizamos frecuentemente para la obtención de puntos de facción y así mismo hacer economía y aprender en cuanto a posicionamiento en peleas a baja escala. No es obligatorio asistir, pero sí aconsejable. \n\n> Si mueres, el <#1015940190583402506> hace que se pueda reequipar si el jugador tiene el mínimo requerido.\n\n> Para poder distinguir a los jugadores que cumplen los requisitos de los que no, se hará por el rol  de **"Caerleon"** con su respectivo icono.\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n`⚔️`  **El mínimo recomendado y para optar a regear:**\n\n``` Mínimo de IP con la build equipada ➟ +1200\n Ramas de arma principal al 75 de spec ➟ 2```'
			)
			.setImage('https://i.imgur.com/4YvKhHO.png');

		const embed_hideout = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                  ❮❮    HIDEOUT    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor(8767009)
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
