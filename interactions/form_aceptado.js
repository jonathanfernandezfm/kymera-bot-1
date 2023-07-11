const { EmbedBuilder } = require('discord.js');
const { rol_formulario } = require('../data/db.json');

module.exports = {
    name: 'aceptar_formulario',
    description: 'Formulario aceptado',
    execute: async (interaction) => {
        if (!rol_formulario) {
            return await interaction.reply({
                content:
                    '🔴 ERROR: El rol para usuarios aceptados no esta configurado, contacta con BkNcs',
                ephemeral: true,
            });
        }
        const previous_embed = interaction.message.embeds[0];
        const embed_formulario = EmbedBuilder.from(previous_embed)
            .setColor('#64FF64')
            .setDescription(
                `✅ Aceptado por el <@&1016042908257894460> - <@${interaction.user.id}> \nㅤ⠀⠀⠀⠀⠀⠀⠀\n`
            );

        await interaction.message.edit({
            embeds: [embed_formulario],
            components: [],
        });

        const user = interaction.message.mentions.users.first();
        const dmChannel = await user.createDM();

        const person = await interaction.guild.members.fetch(user.id);
        person.roles.add(rol_formulario);

        const embed_response = new EmbedBuilder()
            .setColor('#64ff64')

            .setImage('https://i.imgur.com/puCrbDn.png');

        dmChannel.send({
            content:
                '⠀⠀⠀⠀⠀⠀⠀⠀\n**¡Enhorabuena, has obtenido un nuevo rol!**\n\n Jerarquía, rangos y ascensos: \n> ➟ <#1085582548010279032>\n> ➟ <#1085582750137991218>\n> ➟ <#1085582936855805962>\n\nPara saber acerca de la normativa de las actividades: \n> ➟ <#1085580942762053692>\n\n No te pierdas ningún evento: \n> ➟ <#1081575936098578463>\n\n Conoce nuestro Sistema DNT: \n> ➟ <#1085584131691380776>\n\n Elige el rol que más se adapte a tu jugabilidad: \n> ➟ <#1015940451410378832>\n\nㅤ    ',
            embeds: [embed_response],
        });
    },
};
