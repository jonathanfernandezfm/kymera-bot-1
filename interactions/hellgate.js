module.exports = {
    name: 'hellgate',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1092049428510146721';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1092049428510146721> satisfactoriamente',
            ephemeral: true,
        });
    },
};
