module.exports = {
    name: 'invitacion',
    description: 'Crea mensaje de reglas',
    execute: async (msg) => {
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n https://discord.gg/2QV2SZdXpP',
        });

        await msg.delete();
    },
};
