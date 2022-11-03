const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'formulario',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {
		const row = new ActionRowBuilder().addComponents(
			new ButtonBuilder().setCustomId('formulario').setEmoji('📤').setStyle(ButtonStyle.Primary)
		);

		const embed = new EmbedBuilder().setColor(3697893).setDescription(
			`\`📝 FORMULARIO DE APLICACIÓN A KYMERA\`\n
				Pulsa el botón "📤" para acceder al formulario.\n
				Se te abrirá una nueva conversación en tus mensajes privados para proceder con las preguntas.\n
				\`⚠️ Recuerda tener tus mensajes privados activos\`\n
				⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻\n
				➣ Si has sido aceptado, te aparecerá un mensaje privado con un ⮕ \`✅\`
				➣ Si no has sido aceptado, te aparecerá un mensaje privado con un ⮕ \`❌\`\n
				⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻`
		);

		await msg.channel.send({
			content: 'ㅤ    ',
			embeds: [embed],
			components: [row],
		});

		await msg.delete();
	},
};
