const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'd10',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Existirá un sistema de rangos objetivo que buscará fomentar la participación en el gremio, dar herramientas para pelear en grupo, y orientarse hacia la cooperación. Todos los rangos tienen un color e icono para diferenciarlos correctamente tanto dentro del juego como en discord. Nos regimos por la meritrocacia.`, ephemeral: true })
  }
      			

};
