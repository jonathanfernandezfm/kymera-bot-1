const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'roaming',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 return interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n 🐎 __**¿EN QUÉ CONSISTE EL ROAMING?**__\n➥ Es una actividad grupal recomendada de máximo 10 personas (para no formar blob en el mapa) con builds específicas de ZvZ y que consiste en pelear todo tipo de objetivos de mundo abierto, ya sean cofres, outpost, arañas, orbes, nodos... `, ephemeral: true })
  }
      			

};
