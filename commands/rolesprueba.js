const { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: 'rp',
	description: 'RP',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new SelectMenuBuilder().setCustomId('rp').setPlaceholder('☰⠀Abrir menú de la isla del gremio').addOptions(
				{
					label: 'Sistema de repartición de loot',
					value: 'reparto',
					emoji: '1037148095160537109',
				},
      {
					label: 'Reclamar cofre personal',
					value: 'reclamar',
					emoji: '🎟️',
				}
			)
		);

		const embed = new EmbedBuilder()

			.setColor("#057DD2")
			.setDescription(
				'<:cofre:1022572341160587354> Para el reparto del loot hay disponible un cofre general en la isla del gremio con una pestaña habilitada donde todos los miembros podrán coger la parte correspondiente libremente.\n\n<:loot:1051932396498473010> Existe un tiempo establecido para reclamar tu loot, ya que si no es reclamado, lo perderás y no habrá opción de recuperarlo.'
			)
			.setImage('https://i.imgur.com/nX3ojNG.png');

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:martlock:1051934577003855942>  **INFORMACIÓN IMPORTANTE SOBRE LA ISLA DE MARTLOCK:**\n➥ isla del gremio, cofres personales, sistema de reparto de loot.\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
