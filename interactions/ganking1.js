const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'ganking1',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1091114856503070720";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `Se te ha añadido el rol <@&1091114856503070720> satisfactoriamente`, ephemeral: true })
  }
  
};