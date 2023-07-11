const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'normativa',
    description: 'Normativa interaction',
    execute: async (interaction) => {
        const embed_general = new EmbedBuilder()

            .setColor('#CD8543')
            .setDescription('`Normas aplicables con carácter general⠀`')

            .addFields(
                {
                    name: 'ㅤ',
                    value: '> :one:  **Respeto ante todos los miembros** que formen parte del gremio, ya tenga rango o carezca de él.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :two:  **Llorar, gritar y quejarse no sirve de nada**, actuar con calma, ofrecer soluciones y disfrutar del juego.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :three:  **El líder de la party** es quien organiza, hace y deshace. No está obligado a aceptar a todos, es quien pone sus normas.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :four:  **Cualquier persona que robe/desprestigie el gremio**, será totalmente expuesta y kickeada, sin opción de retorno.',
                    inline: false,
                },
                {
                    name: 'ㅤ',
                    value: '> :five:  **No queremos ego players**, cada integrante de Kymera tiene un nivel diferente. Estamos para aprender de los fallos, nadie es mejor que nadie.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :six:  **Los rangos funcionan por Meritocracia**. (*personas que están más capacitadas según sus méritos*)',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :seven: ** En Caerleon y Zona Negra**, **RED IS DEATH**, no hay dramas por matar.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :eight:  **No os exime de la responsabilidad** si no has leído las normas y se incumplen algunos de los puntos ya mencionados.',
                    inline: true,
                }
            );
        const embed_ncaerleon = new EmbedBuilder()

            .setColor('#FF2424')
            .setDescription('`Normas aplicables únicamente a Caerleon`')

            .addFields(
                {
                    name: 'ㅤ',
                    value: '> :one:  **Se le hará caso al party leader o al caller de la party designado**, si alguien se niega a hacer caso será motivo de kick y se le matará (DE NINGUNA MANERA PODRÁ PEDIR REGEAR)',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :two:  **No podrá optar al regear** ninguna persona que no llegue a la IP mínima y especialización requerida para la actividad.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :three:  **RED IS DEATH**, si encontráis una party en la que esté otro miembro de Hydra, podéis matarlo.',
                    inline: false,
                },
                {
                    name: 'ㅤ',
                    value: '> :four:  **Se dará un primer aviso** si se perjudica a una party de full Kymera. El siguiente aviso será expulsión (*Bombearlos , ir con oso a joder, revelar posición*)',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :five:  **Se dará un primer aviso** si hay muchas quejas de un jugador. El siguiente aviso será motivo de expulsión permanente.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '>  :six:  **No toleramos lloros ni quejas**, solo queremos soluciones.',
                    inline: false,
                }
            );
        const embed_nfama = new EmbedBuilder()

            .setColor('#3373c7')
            .setDescription('`Normas aplicables únicamente a Fama`')
            .addFields(
                {
                    name: 'ㅤ',
                    value: '> :one:  **El party líder es quien dirige la party**, elige quien va, que builds llevar y que IP mínimo. Podrá kickear libremente si no se le respeta.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :two:  **Al caller designado se le hará caso y se le escuchará en todo momento**, de lo contrario, este podrá expulsar a cualquier miembro de la party.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :three:  **El líder no está obligado a aceptar a todo el mundo**, es su party, ponen sus reglas y el límite de miembros que asistirán.',
                    inline: false,
                },
                {
                    name: 'ㅤ',
                    value: '> :four: **No toleramos lloros ni quejas**, solo soluciones. (Se tomarán medidas si ocurre con frecuencia)',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :five:  Si hay más de una party en la misma Dungeon, **se dividirá**, o  tendrá prioridad **la que más IP tenga con set de pelea**. ',
                    inline: true,
                }
            );

        const embed_navalonianas = new EmbedBuilder()

            .setColor('#ffca38')
            .setDescription('`Normas aplicables únicamente a Avalonianas`')

            .addFields(
                {
                    name: 'ㅤ',
                    value: '> 📝 **Requisitos mínimos:** \n\n - Equipamiento adecuado 6.3(calidad sobresaliente o más) \n\n - Swaps 7 o equivalente mínimo \n\n - Set de pelea T8  (las que se piden) \n\n - Montura rápida/Caballo Gallardo \n\n - Capa Fort Sterling \n\n - 5 comidas de tu rol + 50 venenos ',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> <:restar:1047921057874575431> **No se tolerará:** \n\n ```- Insultosㅤㅤㅤㅤㅤ- Gritos\n\n- Menospreciosㅤㅤ‎ - Discusiones```',
                    inline: false,
                },
                {
                    name: 'ㅤ',
                    value: '> :one:  **Si tu rol es healer**, por muy mal que lo haga la party deberás intentar levantar a todos los posibles debido a que admites esta responsabilidad al inscribirte con ese rol.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '> :two:  **Se dará un primer aviso** si hay muchas quejas de un jugador. El siguiente aviso será motivo de expulsión permanente de las avalonianas.',
                    inline: true,
                },
                {
                    name: 'ㅤ',
                    value: '>  :three:  **Se hará caso en todo momento al caller de la party**.',
                    inline: false,
                }
            );
        switch (interaction.values[0]) {
            case 'general':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_general],
                });
            case 'ncaerleon':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_ncaerleon],
                });
            case 'nfama':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_nfama],
                });
            case 'navalonianas':
                return await interaction.reply({
                    content: '',
                    ephemeral: true,
                    embeds: [embed_navalonianas],
                });
            default:
                return;
        }
    },
};
