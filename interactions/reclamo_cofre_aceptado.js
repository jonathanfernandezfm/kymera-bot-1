const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'aceptar_reclamo_cofre',
	description: 'Reclamo cofre aceptado',
	execute: async (interaction) => {
		const previous_embed = interaction.message.embeds[0];
		const embed_formulario = EmbedBuilder.from(previous_embed)
			.setColor('#17fc03')
			.setTitle('<:icono_cofre:1022572341160587354>ㅤReclamo de cofre realizadoㅤ✅');

		await interaction.message.edit({
			embeds: [embed_formulario],
			components: [],
		});

		const user = interaction.message.mentions.users.first();
		const dmChannel = await user.createDM();

		const embed_response = new EmbedBuilder().setColor('#17fc03').setTitle('Tu cofre ha sido asignadoㅤ✅');

		dmChannel.send({
			content: 'ㅤ    ',
			embeds: [embed_response],
		});
	},
};
