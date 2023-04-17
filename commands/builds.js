const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {

const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('builds')
					.setLabel('Acceder a las builds del gremio')
          .setEmoji('🤼')
          .setLink('')
					.setStyle(ButtonStyle.Secondary),
        
      )
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
			
		});

    await msg.channel.send({
			content: 'https://i.imgur.com/zUowfAx.png',
			
		});

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n<:ayuda:1045652052400939078>  **ROLES DE ESPECIALIZACIÓN:**\n➥ Elige máximo dos roles diferentes que sean los que más uses.',
			
			components: [row],
		
		
		
		});
    
		await msg.delete();
	},
};


