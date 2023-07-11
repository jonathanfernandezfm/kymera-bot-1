module.exports = {
    name: 'crafter',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1091143497467314186';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1091143497467314186> satisfactoriamente',
            ephemeral: true,
        });
    },
};
