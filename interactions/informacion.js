const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'informacion',
    description: 'Informacion interaction',
    execute: async (interaction) => {
        const embed_terminos = new EmbedBuilder()
            .setTitle('🔠  **𝖠𝖢𝖱𝖮́𝖭𝖨𝖬𝖮𝖲 𝖸 𝖲𝖨𝖦𝖫𝖠𝖲 𝖣𝖤 𝖠𝖫𝖡𝖨𝖮𝖭**')
            .setColor('#057DD2')
            .setDescription(
                'Esta es la lista de términos actualizada de Albion Online y que utilizamos con frecuencia en nuestro contenido y que te servirá para familiarizarte con el juego.'
            )

            .addFields(
                {
                    name: 'ㅤ',
                    value: '`AoE: Area of effect`⠀[(Imagen)](https://i.imgur.com/ga052rg.png) \n➥ habilidades que pueden afectar a varios enemigos/aliados en un área determinada.\n\n `Backear`\n➥ volver o retroceder a una posición inicial o anterior.\n\n `Gankear`\n➥ asaltar de forma inesperada a otros jugadores con el fin de robarles el equipo \n\n `Clap` \n➥ gran concentración de daño en un área, va de la mano con el término AoE. \n\n `Clamp`\n➥ agruparse, juntarse, por lo general de manera desorganizada, rompiendo una formación de batalla. \n\n `Cap`\n➥ capturar, utilizado en batallas de arena/GvG para conquistar los monolitos (Piedras). \n\n `Chasear`\n➥ perseguir, acechar a alguien. \n\n `Push`\n➥ empujar, seguir hacia adelante \n\n `Scrim`\n➥ batallas de entrenamiento definidas con el combate personalizado. \n\n `Purgar`\n➥ eliminar buffs del enemigo.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '`Blob`⠀[(Imagen)](https://i.imgur.com/7whvP3h.png) \n➥ círculo en el mapa que representa X cantidad de jugadores. \n**EJ:** Blob T1 (11 Pjs), Blob T2 (21 Pjs) \n\n `Choke`\n➥ espacio reducido que se puede aprovechar para ganar ventaja en peleas. \n\n `Engage`\n➥ iniciar un ataque contra enemigos. \n\n `Counter engage`\n➥ iniciar el ataque seguidamente después de que el equipo enemigo haya efectuado el suyo. \n\n `Divear`\n➥ adentrarse en mazmorras con el fin de emboscar a una party (grupo). \n\n `Flankear` \n➥ posicionamiento por un costado o punto ciego de un punto inicial de combate. \n\n `Zonear`\n➥ pasar de mapa, se marca por los cuadrantes del mismo. \n\n `Ping`\n➥ señal amarilla marcada por un jugador en el minimapa.\n\n `Cuadrantes`\n➥ cuarta parte de la zona, tomando de referencia los rumbos (Norte, sur, este y oeste). \n\n `Holdear`\n➥ aguantar la posición.',
                    inline: true,
                }
            );

        const embed_objectives = new EmbedBuilder()
            .setTitle('🎯  **𝖮𝖡𝖩𝖤𝖳𝖨𝖵𝖮𝖲 𝖣𝖤 𝖫𝖠 𝖲𝖤𝖠𝖲𝖮𝖭**')
            .setColor('#057DD2')
            .setDescription(
                'ㅤ\n> 1️⃣⠀**Realizar actividades con un mínimo de IP** \n```1200 para actividades de roaming, caminos, caerleon...```   \n> 2️⃣⠀**Llegar a rango plata como mínimo** \n```Compromiso para obtener 25K de puntos de temporada y con intención de llegar a 40K para subir de calidad``` \n> 3️⃣⠀**Contenido diario de fama para subir armas principales**\n```Grupos para estáticas,  HCE...``` \n> 4️⃣ **Formar grupos consistentes para contenido PVP**\n```20v20, 5v5, caminos avalonianos, crystals...```\n> 5️⃣⠀**Ser más activos en zona negra**\n```Cofres, orbes, arañas...```\n '
            );

        const embed_caerleon = new EmbedBuilder()
            .setTitle('🐺 **𝖥𝖠𝖢𝖢𝖨𝖮́𝖭 𝖣𝖤 𝖢𝖠𝖤𝖱𝖫𝖤𝖮𝖭**')
            .setColor('#057DD2')
            .setDescription(
                '\n\n `¿En qué consiste Caerleon?` <:lobo:1050585944497074188>\n➥ Es una actividad que realizamos frecuentemente para la obtención de **puntos de facción** y así mismo hacer economía y aprender en cuanto a **posicionamiento** en peleas a baja escala. \n\n***No es obligatorio asistir, pero sí aconsejable.*** \n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`¿Cómo puedo asistir?` <:evento:1050584054803726466>\n➥ Para poder participar en los grupos de Caerleon deberás equiparte con las **builds correspondientes** y tener un **mínimo de IP** (1200) con el equipo equivalente a <:t6:1050584149070721075>.\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`¿Qué build debo llevar?` <:arma:1050584076869976084>\n➥ Actualmente la composición que llevamos la forman **armas de daño en área** (AOE) e intentamos jugar al **clap**.\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`¿Qué ocurre si muero?` <:dead:1050584050747834378>\n➥ En Caerleon hay reequip de las personas que mueran. **Los que hayan obtenido el rol** de <@&1020635840327729196> en el discord **pueden optar a reequip**, de lo contrario, tendrás que **solicitar tu rol en el canal** <#1015940451410378832>.\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`¿Qué es el reequip?` <:reequip:1050583984771444776>\n➥ Es un **sistema de reequipamiento** por el cual, si mueres, nuestro <#1015940190583402506> pagará tu equipo (250K) **si tienes el mínimo requerido** (2 armas o más al 75 de spec de diferentes ramas) y el **rol** de <@&1020635840327729196> en discord.'
            );

        const embed_hideout = new EmbedBuilder()
            .setTitle('<:ho:1050584110546030674> **𝖧𝖨𝖣𝖤𝖮𝖴𝖳**')
            .setColor('#057DD2')
            .setDescription('Actualmente sin Hideout');

        switch (interaction.values[0]) {
            case 'terminos':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_terminos],
                });
            case 'objectives':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_objectives],
                });
            case 'fac_caerleon':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_caerleon],
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
