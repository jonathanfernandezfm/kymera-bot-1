const { Events, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(interaction) {
		console.log(interaction.content);
		if (interaction.author.bot) return;
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);
		const row2 = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);

		const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');

		await interaction.reply({ content: 'I think you should,', ephemeral: true, embeds: [embed], components: [row, row2] });
	},
};