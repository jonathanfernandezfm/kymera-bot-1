module.exports = {
    name: 'healer2',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1076849508509560933';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1076849508509560933> satisfactoriamente',
            ephemeral: true,
        });
    },
};
