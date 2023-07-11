module.exports = {
    name: 'jerarquia',
    description: 'Normativa',
    execute: async (msg) => {
        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });
        await msg.channel.send({
            content: 'https://i.imgur.com/k7qo58x.png',
        });

        await msg.channel.send({
            content: '⠀⠀⠀⠀⠀⠀⠀⠀\n',
        });
        await msg.channel.send({
            content: 'https://i.imgur.com/krovN7l.png',
        });

        await msg.delete();
    },
};
