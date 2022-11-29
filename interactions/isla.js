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
			.setColor("#EB952C")
			.setDescription(
				'`🧭` Aquí encontrarás la distribución de los __**cofres personales**__ que tiene cada integrante de Kymera. <@&1015944979136389190> y <@&1015942996455325719> se encargarán de repartir las partes del loot que no han sido reclamadas anteriormente y se han quedado en el cofre general de la isla.\n\n`📩` Contacta con un <@&1015944979136389190>, <@&1015942996455325719> o <@&1015296284359413842> para la creación de un nuevo cofre personal si aún no te han asignado uno.\n'
			)
    .setImage('https://i.imgur.com/LpRs2u3.png');

const embed_cofres1 = new EmbedBuilder()
			.setColor("#07AC13")
			.setDescription('`🟩 Sector 1`')
        
      .addFields(
				{
					name: 'COFRES DE INTEGRANTES',
					value: '> **1** <@599553288760852505>\n> **2** <@313273060142874625>\n> **3** <@538838615858348061>\n> **4** <@701804799640993913>\n> **5** <@956941233782153247>\n> **6** <@698980972497993861>',
					inline: true,
				},
        {
					name: 'ㅤ',
					value: '> **7** <@298511229742481408>\n> **8** <@298511229742481408>\n> **9** <@626474766072545301>\n> **10** <@680090531765682177>\n> **11** <@562273801765781514>\n> **12** <@269242327896293377>',
					inline: true,
				},
)
    
const embed_cofres2 = new EmbedBuilder()
			.setColor("386CE5")
			.setDescription('`🟦 Sector 2`')
        
      .addFields(
				{
					name: 'COFRES DE INTEGRANTES',
					value: '> **1** <@402540641206140938>\n> **2** <@515550774097477642>\n> **3** <@219575368892284938>\n> **4** <@365212179009634304>\n> **5** <@131896965129568257>\n> **6** <@173903916415582208>',
					inline: true,
				},
        {
					name: 'ㅤ',
					value: '> **7** <@269770700103876608>\n> **8** <@393900465521426432>\n> **9** <@265865602894266368>\n> **10** LIBRE\n> **11** LIBRE\n> **12** LIBRE',
					inline: true,
				},
)
    
    const embed_cofres3 = new EmbedBuilder()
			.setColor("#EBDD08")
			.setDescription('`🟨 Sector 3`')
        
      .addFields(
				{
					name: 'COFRES DE INTEGRANTES',
					value: '> **1** <@163703027071451136>\n> **2** <@668178760012660777>\n> **3** <@281448494726774784>\n> **4** <@366513365968879617>\n> **5** <@354426163344703490>\n> **6** <@659021715191627776>\n> **7** <@121725389444743168>\n> **8** <@385539678922604547>',
					inline: true,
				},
        {
					name: 'ㅤ',
					value: '> **9** <@442709394442944512>\n> **10** <@668178760012660777>\n> **11** <@430447956492288000>\n> **12** <@1002050570028322878>\n> **13** <@648963656570241029>\n> **14** <@304267539788070922>\n> **15** <@402916233713811456>',
					inline: true,
				},
)
        
      const embed_cofres4 = new EmbedBuilder()
			.setColor("#EB9A1E")
			.setDescription('`🟧 Sector 4`')
        
      .addFields(
				{
					name: 'COFRES ADMINISTRATIVOS',
					value: '> <#1015940190583402506>',
					inline: true,
				},
      )
			

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
					embeds: [embed_cofres, embed_cofres1, embed_cofres2, embed_cofres3, embed_cofres4],
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
