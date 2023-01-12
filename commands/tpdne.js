const { SlashCommandBuilder } = require('discord.js');
const request = require('request-promise');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tpdne')
		.setDescription('Replies with a person that does not exist'),
	async execute(interaction) {
		const imageUrl = 'https://thispersondoesnotexist.com/image';
		const imageBuffer = await request({
			url: imageUrl,
			encoding: null,
		});
		//await interaction.reply({ files: [{ attachment: imageBuffer, name: 'tpdne.jpg' }] });
		await interaction.reply('This person does not exist');
		await interaction.channel.send({ files: [{ attachment: imageBuffer, name: 'tpdne.jpg' }] });

	},
};