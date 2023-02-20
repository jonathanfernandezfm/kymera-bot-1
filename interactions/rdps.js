const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'rdps',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1076850213077123082";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `Se te ha añadido el rol <@&1076850213077123082> satisfactoriamente`, ephemeral: true })
  }
  
};