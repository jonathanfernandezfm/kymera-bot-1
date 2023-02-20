const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'tank',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1020271245310308394";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `te añadi el rol ${rol} (texto de ejemplo)`, ephemeral: true })
  }
  
};