module.exports = {
    name: 'trader',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1092049195118121070';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1092049195118121070> satisfactoriamente',
            ephemeral: true,
        });
    },
};
