const { SlashCommandBuilder } = require('discord.js');
const request = require('request-promise');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tcdne')
		.setDescription('Replies with a cat that does not exist'),
	async execute(interaction) {
		const imageUrl = 'https://thiscatdoesnotexist.com';
		const imageBuffer = await request({
			url: imageUrl,
			encoding: null,
		});
		//await interaction.reply({ files: [{ attachment: imageBuffer, name: 'tpdne.jpg' }] });
		await interaction.reply('This cat does not exist');
		await interaction.channel.send({ files: [{ attachment: imageBuffer, name: 'tcdne.jpg' }] });
	},
};