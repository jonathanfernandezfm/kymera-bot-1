const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { canal_reclamos } = require('../data/db.json');

module.exports = {
	name: 'isla',
	description: 'Informacion interaction',
	execute: async (interaction) => {
		const embed_cofres = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                     ❮❮     COFRES PERSONALES    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('386CE5')
			.setDescription(
				'`🧭` Aquí encontrarás la distribución de los __**cofres personales**__ que tiene cada integrante de Kymera. <@&1015944979136389190> y <@&1015942996455325719> se encargarán de repartir las partes del loot que no han sido reclamadas anteriormente y se han quedado en el cofre general de la isla.\n\n`📩` Contacta con un <@&1015944979136389190>, <@&1015942996455325719> o <@&1015296284359413842> para la creación de un nuevo cofre personal si aún no te han asignado uno.\n\n`🟩 Sector 1 - Integrantes`\n\n> - (1) BkNcs‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - (8) **LIBRE**\n> - (2) Valdeandemagico‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (9) GarothUrsul \n> - (3) Kertsh‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (10) Faragnir\n> - (4) Diego280412‎ ‎‎ ‎‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (11) Chymo\n> - (5) Hysterykoㅤㅤ\n> - (6) **LIBRE**\n> - (7) NeloLXlV\n \n\n`🟦 Sector 2 - Integrantes`\n\n> - (1) ‎SntkaLi  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - (8) Vatidos\n> - (2) ‎Waitmask ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ - (9) Fentark\n> - (3) DrHiruluk‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (10) Lujedom\n> - (4) **LIBRE**‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎- (11) TyReX122\n> - (5) LkaLilith‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ - (12) DrHirulukㅤㅤ\n> - (6) PesimosSA\n> - (7) **LIBRE**\n\n\n`🟨 Sector 3 - Integrantes`\n\n> - (1) Uro‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ - (8) ‎Peirau\n> - (2) EljesuJR‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (9) AeroO15\n> - (3) LaGherzza‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (10) DjBruyne‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ \n> - (4) MANU9090‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (11) XBrian2005X ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \n> - (5) Honix‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (12) Zak18 ‎ ‎ ‎ ‎ ‎ \n> - (6) Calaverasp‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎  ‎- (13) Loopeer2\n> - (7) TENGORABO‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎- (14) Saitek2805\n\n\n`🟧 Sector 4 - Administración`\n'
			)
			.setImage('https://i.imgur.com/LpRs2u3.png');

		const embed_loot = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                       ❮❮     REPARTO DE LOOT    ❯❯  ㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor('386CE5')
			.setDescription(
				'`🐺` **El loot de las actividades que tengan que ver con Caerleon** irán destinadas al DNT system, en su respectiva pestaña dentro de la isla del gremio. Nadie se quedará con los items una vez looteados del cadáver. \n\n > ➟ <#1015940190583402506> \n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n`🎰` **El loot de las actividades grupales** (tales como roaming, caminos, gankeos...) formadas por los propios miembros de Kymera irá destinado al cofre general, que será repartido por integrantes de la administración.\n \n>  ➟ <#1019718077316878409>\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n`👥` **En los grupos formados para realizar actividades de fama** el loot recogido de cadáveres en las peleas se repartirá entre los miembros de la party, excepto el loot de los cofres de estáticas, que será de uso propio.\n\n**⊱━━━━━━━━━━━━━━━━━━━━━━━━━━⊰**\n\n`⚠️`  **Es de obligación realizar una screenshot inicial** de los integrantes que vayan a formar el grupo para el desarrollo de las actividades.'
			)
			.setImage('https://i.imgur.com/EAUuTFn.png');

		const embed_reclamado = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                ❮❮    COFRE RECLAMADO    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
			)
      .setDescription(`Un integrante de la administración atenderá tu petición lo má rápido posible.`)
      
			.setColor("#59FF59");

		const embed_reclamo = new EmbedBuilder()
			.setColor(3697893)
			.setTitle('<:icono_cofre:1022572341160587354> Nuevo reclamo de cofre')
			.setDescription(`👤 Usuario en Discord: <@${interaction.user.id}>\n`)
			.setThumbnail(interaction.user.displayAvatarURL());

		switch (interaction.values[0]) {
			case 'distribucion':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_cofres],
				});
			case 'reparto':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_loot],
				});
			case 'reclamar':
				if (!canal_reclamos) {
					return await interaction.reply({
						content: '🔴 ERROR: El canal de reclamos no esta configurado, contacta con BkNcs',
						ephemeral: true,
					});
				}

				// eslint-disable-next-line no-case-declarations
				const row = new ActionRowBuilder().addComponents(
					new ButtonBuilder()
						.setCustomId('aceptar_reclamo_cofre')
						.setLabel('Aceptar')
						.setStyle(ButtonStyle.Success),
					new ButtonBuilder()
						.setCustomId('denegar_reclamo_cofre')
						.setLabel('Denegar')
						.setStyle(ButtonStyle.Danger)
				);

				// eslint-disable-next-line no-case-declarations
				const channel = await interaction.guild.channels.fetch(canal_reclamos);
				await channel.send({
					content: `\n> Nuevo reclamo de cofre de <@${interaction.user.id}>\n`,
					embeds: [embed_reclamo],
					components: [row],
				});

				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_reclamado],
				});
			default:
				return;
		}
	},
};
