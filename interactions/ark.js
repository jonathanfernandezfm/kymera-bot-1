const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'ark',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1081911884162269224";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `✅‎ <@${interaction.user.id}> Se te ha añadido el rol <@&1081911884162269224> y ahora tienes acceso a los canales de Ark Survival Envolved`, ephemeral: true })
  }
  
};