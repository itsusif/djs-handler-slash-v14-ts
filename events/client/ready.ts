const { ActivityType } = require('discord.js');
const { prefix } = require('../../config.json');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}`);
        console.log(`Servers: ${client.guilds.cache.size}`, `Users: ${client.guilds.cache
            .reduce((a, b) => a + b.memberCount, 0)
            .toLocaleString()}`, `Commands: ${client.commands.size}`);
        client.user.setStatus("online")
        client.user.setActivity(`${prefix}help | SlashCommand`, { type: ActivityType.Listening })
    }
};