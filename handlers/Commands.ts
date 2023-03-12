import fs from 'fs';
import ascii from 'ascii-table';
let table = new ascii(`Commands`);
table.setHeading('Command', 'Load Status');

module.exports = (client) => {
    try {
        fs.readdirSync('./src/bot/commands').forEach((folder) => {
            const commandFiles = fs.readdirSync(`./src/bot/commands/${folder}`).filter(file => file.endsWith('.ts'));
            for (const file of commandFiles) {
                let command = require(`../commands/${folder}/${file}`);
                if (command.name) {
                    client.commands.set(command.name, command);
                    table.addRow(file, '✅');
                } else {
                    table.addRow(file, '❌');
                    continue;
                }
            }
        });
        console.log(table.toString());
    } catch (err) {
        console.log(err)
    }
}