const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'denegar_reclamo_cofre',
	description: 'Cofre denegado',
	execute: async (interaction) => {
		const previous_embed = interaction.message.embeds[0];
		const embed_formulario = EmbedBuilder.from(previous_embed)
			.setColor('#fc0303')
			.setTitle('<:icono_cofre:1022572341160587354> Reclamo de cofre denegado ❌');

		await interaction.message.edit({
			embeds: [embed_formulario],
			components: [],
		});

		const dmChannel = await interaction.message.mentions.users.first().createDM();

		const embed_response = new EmbedBuilder().setColor('#fc0303').setTitle('<:icono_cofre:1022572341160587354> Tu cofre ha sido denegado ❌');

		dmChannel.send({
			content: 'ㅤ    ',
			embeds: [embed_response],
		});
	},
};
