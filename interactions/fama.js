module.exports = {
    name: 'fama',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1092046164142080051';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1092046164142080051> satisfactoriamente',
            ephemeral: true,
        });
    },
};
