const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { canal_reclamos } = require('../data/db.json');

module.exports = {
	name: 'boton',
	description: 'Informacion interaction',
	execute: async (interaction) => {
		const embed_requisitos = new EmbedBuilder()
			
			.setColor("#057DD2") //
			.setDescription(
				'📝 __Los requisitos para recibir el rol de Caerleon__ ➠ <@&1020635840327729196>\n\n- Especialización de 2 armas principales de Caerleon al **75**\n```Mínimo 1200 IP para asistir a de Caerleon```\n\n*Es obligatorio tener este rol en discord para poder optar a regear en las actividades de Caerleon, de lo contrario no podrás solicitarlo sin él.*\n\n---------------------\n\n📝 __Los requisitos para recibir el rol de Roaming__ ➠ <@&1020636374589788190>\n\n- Especialización de 3 armas principales al **100**\n```Mínimo 1300 IP para asistir a un evento de Roaming```\n\n---------------------\n\n📝 __Los requisitos para recibir el rol de Avalonianas__ ➠ <@&1057997504655921183>\n\n- Haber leído la normativa y tener los set adecuados para esta actividadn\n```Montura rápida, capa fortsterling, set de pelea y skip```'
			)

		const embed_reclamado = new EmbedBuilder()
		
      .setDescription(`Un integrante de la administración atenderá tu petición lo má rápido posible.`)
      
			.setColor("#057DD2");

		const embed_reclamo = new EmbedBuilder()
			.setColor(3697893)
			.setTitle('<:icono_cofre:1022572341160587354> Nuevo reclamo de cofre')
			.setDescription(`👤 Usuario en Discord: <@${interaction.user.id}>\n`)
			.setThumbnail(interaction.user.displayAvatarURL());

		switch (interaction.values[0]) {
			case 'requisitos':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_requisitos],
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
