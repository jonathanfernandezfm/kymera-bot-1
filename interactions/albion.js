const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'albion',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		let rol = "1077367080967475350";
		interaction.member.roles.add(rol);
		return interaction.reply({ content: `✅‎ <@${interaction.user.id}> Se te ha añadido el rol <@&1077367080967475350> y ahora tienes acceso a los canales de Albion Online`, ephemeral: true })
  }
  
};