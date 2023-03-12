module.exports = {
    name: "ping",
    description: "Test the bots response time.",
    async execute(client, interaction) {
        try {
            interaction.reply({ content: `:ping_pong: **Pong ${client.ws.ping} ms**`, ephemeral: true });
        } catch (err) {
            console.log(err)
        }
    }
}