const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'gw2',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1081911656243802132";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `✅‎ <@${interaction.user.id}> Se te ha añadido el rol <@&1081911656243802132> y ahora tienes acceso a los canales de Guild Wars 2`, ephemeral: true })
  }
  
};