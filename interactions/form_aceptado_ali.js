const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'aceptar_formulario_ali',
	description: 'Formulario aceptado',
	execute: async (interaction) => {
	
		const previous_embed = interaction.message.embeds[0];
		const embed_formulario = EmbedBuilder.from(previous_embed)
			.setColor('#64FF64')
			.setDescription(`✅ Aceptado por el <@&1015296284359413842> - <@${interaction.user.id}> \nㅤ⠀⠀⠀⠀⠀⠀⠀\n`);

		await interaction.message.edit({
			embeds: [embed_formulario],
			components: [],
		});

		const user = interaction.message.mentions.users.first();
		const dmChannel = await user.createDM();

		const person = await interaction.guild.members.fetch(user.id);

		const embed_response = new EmbedBuilder()
			.setColor('#64ff64')
			.setDescription('`✅` **¡Enhorabuena, tu solicitud ha sido aceptada!** Nos pondremos en contacto contigo lo antes posible para seguir con el proceso.')

     dmChannel.send({
      
       
      embeds: [embed_response],
		});
	},
};
