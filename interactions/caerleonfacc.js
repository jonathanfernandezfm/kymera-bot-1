const { MessageButtom } = require('discord.js');

module.exports = {
	name: 'facc',
	description: 'Boton pulsado',
	execute: async (interaction) => {
		 await interaction.reply({ content: `⠀⠀⠀⠀⠀⠀⠀⠀\n :wolf: __**FACCIÓN CAERLEON**__\n➥ Es una actividad que realizamos frecuentemente (previamente alistándonos en la ciudad) para la obtención de **puntos de facción** y así mismo hacer economía y aprender en cuanto a **posicionamiento** en peleas a baja escala. \n\n:ticket: __**¿CÓMO PUEDO ASISTIR?**__ \n➥ Para poder participar en los grupos de Caerleon deberás equiparte con las **builds correspondientes** y tener un **mínimo de IP** (1200) con el equipo equivalente a <:t6:1050584149070721075>.\n\n:crossed_swords: __**¿QUÉ BUILD DEBO LLEVAR?**__\n➥ Actualmente la composición que llevamos la forman **armas de daño en área** (AOE) e intentamos jugar al **clap**. Al formar el grupo para la actividad se asignarán los roles y armas de los integrantes.\n\n:skull: __**¿QUÉ OCURRE SI MUERO?**__\n➥ Hay reequip de las personas que mueran. **Los que hayan obtenido el rol** de <@&1020635840327729196> en el discord **pueden optar a reequip**, de lo contrario, tendrás que **solicitar tu rol en el canal** <#1015940451410378832>.\n\n:repeat:  __**¿QUÉ ES EL REEQUIP?**__\n➥ Como su nombre indica, es un **sistema de reequipamiento** por el cual, si mueres, nuestro <#1085584131691380776> pagará tu equipo (250K) **si tienes el mínimo requerido** (2 armas o más al 75 de spec de diferentes ramas) y el **rol** de <@&1020635840327729196> en discord.`, ephemeral: true });
  
            await interaction.followUp({ content: `https://i.imgur.com/6Qfpxtv.png`, ephemeral: true });
  }
}