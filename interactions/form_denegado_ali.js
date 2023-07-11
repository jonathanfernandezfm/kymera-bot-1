const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'denegar_formulario_ali',
    description: 'Formulario denegado',
    execute: async (interaction) => {
        const previous_embed = interaction.message.embeds[0];
        const embed_formulario = EmbedBuilder.from(previous_embed)
            .setColor('#FF4D4D')
            .setDescription(
                `❌ Denegado por el <@&1015296284359413842> - <@${interaction.user.id}>\nㅤ⠀⠀⠀⠀⠀⠀⠀\n`
            );

        await interaction.message.edit({
            embeds: [embed_formulario],
            components: [],
        });

        const dmChannel = await interaction.message.mentions.users
            .first()
            .createDM();

        const embed_response = new EmbedBuilder()
            .setColor('#fc0303')
            .setDescription(
                '`❌` Tu solicitud ha sido denegada. No cumples con los requisitios, inténtalo en otro momento'
            );
        dmChannel.send({
            content: 'ㅤ    ',
            embeds: [embed_response],
        });
    },
};
