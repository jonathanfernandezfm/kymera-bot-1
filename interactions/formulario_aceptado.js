const { EmbedBuilder } = require('discord.js');
const { rol_formulario } = require('../data/db.json');

module.exports = {
	name: 'aceptar_formulario',
	description: 'Formulario aceptado',
	execute: async (interaction) => {
		if (!rol_formulario) {
			return await interaction.reply({
				content: '🔴 ERROR: El rol para usuarios aceptados no esta configurado, contacta con BkNcs2 o Poak',
				ephemeral: true,
			});
		}
		const previous_embed = interaction.message.embeds[0];
		const embed_formulario = EmbedBuilder.from(previous_embed)
			.setColor('#17fc03')
			.setTitle(`✅ Aceptado por ${interaction.user.tag} `);

		await interaction.message.edit({
			embeds: [embed_formulario],
			components: [],
		});

		const user = interaction.message.mentions.users.first();
		const dmChannel = await user.createDM();

		const person = await interaction.guild.members.fetch(user.id);
		person.roles.add(rol_formulario);

		const embed_response = new EmbedBuilder()
			.setColor('#17fc03')
			.setTitle('Tu formulario ha sido aceptado ✅')
			.setDescription('test'); // TODO

		dmChannel.send({
			content: 'ㅤ    ',
			embeds: [embed_response],
		});
	},
};