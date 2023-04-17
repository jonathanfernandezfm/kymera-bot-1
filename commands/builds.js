const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'builds',
	description: 'Crea mensaje de formulario',
	execute: async (msg) => {

const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					
					.setLabel('Acceder a las builds del gremio')
        .setURL('https://docs.google.com/spreadsheets/d/124RVREtD3Jftgh4BxyAnF9nuSCfbI9AHl3TFVzWc1eU/edit#gid=1092219548')
					.setStyle(ButtonStyle.Link),
        
      )
    await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
			
		});

    await msg.channel.send({
			content: 'https://i.imgur.com/S1fDV6Y.png',
			
		});

		await msg.channel.send({
			content: '⠀⠀⠀⠀⠀⠀⠀⠀',
			
			components: [row],
		
		
		
		});
    
		await msg.delete();
	},
};


