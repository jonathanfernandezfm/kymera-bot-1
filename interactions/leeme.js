const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'registro',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1080474384327782421";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `✅‎ <@${interaction.user.id}> Te has registrado correctamente en el servidor`, ephemeral: true })
  }
  
};