module.exports = {
    name: 'tank',
    description: 'Boton pulsado',
    execute: async (interaction) => {
        const rol = '1020271245310308394';
        interaction.member.roles.add(rol);
        return interaction.reply({
            content:
                'Se te ha añadido el rol <@&1076650326511337522> satisfactoriamente',
            ephemeral: true,
        });
    },
};
