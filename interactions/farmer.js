module.exports = {
    name: 'farmer',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1091144045801242824';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1091144045801242824> satisfactoriamente',
            ephemeral: true,
        });
    },
};
