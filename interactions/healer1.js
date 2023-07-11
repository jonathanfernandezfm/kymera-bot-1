module.exports = {
    name: 'healer1',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1076844296038252574';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1076844296038252574> satisfactoriamente',
            ephemeral: true,
        });
    },
};
