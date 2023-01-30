const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'boton',
	description: 'Boton pulsado',
	execute: async (interaction) => {
    
    if(interaction.isButton())    {
     
      interaction.deferReplay({ ephemeral: true });

      const member = interaction.member;
  if (interaction.customId === "boton") {
    
    let.rol= "1020271245310308395";
    member.roles.add(rol); 
    return console.log("📝");
  }
        }
}
    };