import fs from 'fs';

module.exports = (client) => {
    fs.readdirSync('./src/bot/events').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./src/bot/events/${folder}`).filter(file => file.endsWith('.ts'));
        for (const file of commandFiles) {
            let event = require(`../events/${folder}/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(client, ...args));
            } else {
                client.on(event.name, (...args) => event.execute(client, ...args));
            }
        }
    })
    // const eventFiles = fs.readdirSync('./src/bot/events').filter(file => file.endsWith('.ts'));
    // for (const file of eventFiles) {
    //     const event = require(`../events/${file}`);
    //     if (event.once) {
    //         client.once(event.name, (...args) => event.execute(client, ...args));
    //     } else {
    //         client.on(event.name, (...args) => event.execute(client, ...args));
    //     }
    // }
}