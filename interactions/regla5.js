const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'regla5',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n> Los tickets en este servidor son atendidos por personas que tienen su propia vida personal, por favor ten paciencia a la hora de abrir un ticket. Evita abrir tickets innecesarios ya que se te podría bloquear.`, ephemeral: true })
  }
      			

};
