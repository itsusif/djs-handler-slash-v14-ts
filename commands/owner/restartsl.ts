import fs from 'fs';
import ascii from 'ascii-table';
let table = new ascii(`Commands`);
table.setHeading('Command', 'Load Status');
const { LoadFiles } = require('../../functions/fileloader')
module.exports = {
    name: "restartsl",
    description: `Restart the bot.`,
    aliases: [],
    async execute(client, message, args) {
        try {
            await LoadFiles('src/bot/SlashCommands')
            fs.readdirSync('./src/bot/SlashCommands').forEach((folder) => {
                const commandFiles = fs.readdirSync(`./src/bot/SlashCommands/${folder}`).filter(file => file.endsWith('.ts'));
                for (const file of commandFiles) {
                    let command = require(`../../SlashCommands/${folder}/${file}`);
                    if (command.name) {
                        client.slashCommands.set(command.name, command);
                        table.addRow(file, '✅');
                    } else {
                        table.addRow(file, '❌');
                        continue;
                    }
                }
            });
            message.reply('Done')
        } catch (err) {
            console.log(err)
        }
    },
};