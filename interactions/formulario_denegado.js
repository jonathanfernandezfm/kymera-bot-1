const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'denegar_formulario',
	description: 'Formulario denegado',
	execute: async (interaction) => {
		const previous_embed = interaction.message.embeds[0];
		const embed_formulario = EmbedBuilder.from(previous_embed)
			.setColor('#fc0303')
			.setTitle(`\`❌ Denegado por ${interaction.user.tag}\``);

		await interaction.message.edit({
			embeds: [embed_formulario],
			components: [],
		});

		const dmChannel = await interaction.message.mentions.users.first().createDM();

		const embed_response = new EmbedBuilder()
			.setColor('#fc0303')
			.setTitle('Tu formulario ha sido denegado ❌')
			.setDescription('test'); // TODO

		dmChannel.send({
			content: 'ㅤ    ',
			embeds: [embed_response],
		});
	},
};
