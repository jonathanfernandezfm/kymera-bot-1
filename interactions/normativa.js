const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'normativa',
	description: 'Normativa interaction',
	execute: async (interaction) => {
		const embed_general = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                    ❮❮    NORMATIVA GENERAL    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor("#3769a9")
			.setDescription('`Normas aplicables con carácter general⠀`')
				
      .addFields(  
           {
              name: 'ㅤ' ,
              value: "> :one:  **Respeto ante todos los miembros** que estén en el gremio.",
              inline: true,
            },
             {
               name: 'ㅤ' ,
               value: "> :two:  **Llorar, gritar y quejarse no sirve de nada**, actuar con calma, ofrecer soluciones y disfrutar del juego.",
               inline: true,
             },
        {
               name: 'ㅤ' ,
               value: "> :three:  **El líder de la party** es quien organiza, hace y deshace. No está obligado a aceptar a todos, es quien pone sus normas.",
               inline: true,
             },
        {
               name: 'ㅤ' ,
               value: "> :four:  **Cualquier persona que robe/desprestigie el gremio**, será totalmente expuesta y kickeada, sin opción de retorno.",
               inline: false,
             },
             {
               name: 'ㅤ' ,
               value: "> :five:  **No queremos ego players**, cada integrante de Kymera tiene un nivel diferente. Estamos para aprender de los fallos, nadie es mejor que nadie,",
               inline: true,
             },
        {
               name: 'ㅤ' ,
               value: "> :six:  **Los rangos funcionan por Meritocracia**. (*personas que están más capacitadas según sus méritos*)",
               inline: true,
             },
             {
               name: 'ㅤ' ,
               value: "> :seven: ** En Caerleon y Zona Negra**, **RED IS DEATH**, no hay dramas por matar.",
               inline: true,
             },
        {
               name: 'ㅤ' ,
               value: "> :eight:  **No os exime de la responsabilidad** si no has leído las normas y se incumplen algunos de los puntos ya mencionados.",
               inline: true,
             },
			)
			.setImage('https://i.imgur.com/15YdPGw.png');

		const embed_ncaerleon = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                     ❮❮    NORMATIVA CAERLEON    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor("#EC0000")
			.setDescription(
				'`🐺` d'
			)

      .addFields(  
           {
              name: 'ㅤ' ,
              value: "> :one:  **Se le hará caso al party leader o al caller de la party designado**, si alguien se niega a hacer caso será motivo de kick y se le matará (DE NINGUNA MANERA PODRÁ PEDIR REGEAR)",
              inline: true,
            },
             {
               name: 'ㅤ' ,
               value: "> :two:  **No podrá optar al regear** ninguna persona que no llegue a la IP mínima y especialización requerida para la actividad.",
               inline: true,
             },
        {
               name: 'ㅤ' ,
               value: "> :three:  **RED IS DEATH**, si encontráis una party en la que esté otro miembro de Kymera, podéis matarlo.",
               inline: false,
             },
        {
               name: 'ㅤ' ,
               value: "> :four:  **Se dará un primer aviso** si se perjudica a una party de full Kymera. El siguiente aviso será expulsión (*Bombearlos , ir con oso a joder, revelar posición*)",
               inline: false,
             },
             {
               name: 'ㅤ' ,
               value: "> :five:  **Se dará un primer aviso** si hay muchas quejas de un jugador. El siguiente aviso será motivo de expulsión permanente.",
               inline: true,
             },
        {
               name: 'ㅤ' ,
               value: ">  :six:  **No toleramos lloros ni quejas**, solo queremos soluciones.",
               inline: true,
             },
            )
			.setImage('https://i.imgur.com/MHyJTVe.png');

		const embed_hideout = new EmbedBuilder()
			.setTitle(
				'━━━━━━━━━━━━━━━━━━━━━━━━ㅤㅤ                                  ❮❮    HIDEOUT    ❯❯  ㅤㅤㅤ━━━━━━━━━━━━━━━━━━━━━━━━'
			)
			.setColor(8767009)
			.setDescription(
				'> <:icono_hideout:1037691104960725013> **Actualmente nuestro HO se encuentra en __Dryvein Cross__**\n> [Para acceder a la ruta más rápida desde el portal de Bridgewatch](https://i.imgur.com/0Xbp3oF.png)'
			)
			.setImage('https://i.imgur.com/uxktgRm.png');

		switch (interaction.values[0]) {
			case 'n_general':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_general],
				});
			case 'fac_caerleon':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_ncaerleon],
				});
			case 'hideout':
				return await interaction.reply({
					content: '',
					ephemeral: true,
					embeds: [embed_hideout],
				});
			default:
				return;
		}
	},
};
