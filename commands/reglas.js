const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'reglas',
	description: 'Crea mensaje de reglas',
	execute: async (msg) => {

		const embed = new EmbedBuilder()
      
			.setColor("#057DD2")
			.setDescription(
				'\n\n <:decalogo:1050727155908223016> `#1` **Comportamiento hacia otros usuarios** \n\n> Este servidor no acepta comportamientos inadecuados hacia cualquier otro miembro de este servidor. No se tolerarán comentarios racistas, homófobos, machistas, xenófobos. \n\n <:decalogo:1050727155908223016> `#2` **Temas de conversación** \n\n> Este servidor es principalmente un servidor dedicado a diversos juegos de MMORPG, así mismo se permiten conversaciones sobre otros temas siempre y cuando no sean delicados. \n\n <:decalogo:1050727155908223016> `#3` **Menciones y flood** \n\n> Evita mencionar reiteradas veces a un mismo usuario y también evita enviar el mismo mensaje muchas veces seguidas para mantener el chat limpio. \n\n <:decalogo:1050727155908223016> `#4` **Spam** \n\n> Los enlaces están permitidos en los canales de texto siempre y cuando no sea una invitación de discord, un enlace malicioso o se envíe con fines de hacer publicidad. \n\n <:decalogo:1050727155908223016> `#5` **Tickets de soporte** \n\n> Los tickets en este servidor son atendidos por personas que tienen su propia vida personal, por favor ten paciencia a la hora de abrir un ticket. Evita abrir tickets innecesarios ya que se te podría bloquear. \n\n <:decalogo:1050727155908223016> `#6` **Uso de canales** \n\n> Cada canal tiene su propósito, no los uses de mala manera ya que podrías ser advertido y seguidamente baneado temporalmente del servidor.'
			)
    .setImage('https://i.imgur.com/JcxvhzR.png');
    
  await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀',
			embeds: [embed],
    });

		await msg.delete();
	},
};


