module.exports = {
    name: "ping2",
    description: "Test the bots response time.",
    async execute(client, interaction) {
        try {
            interaction.reply({ content: `:ping_pong: **Png ${client.ws.ping} ms**`, ephemeral: true });
        } catch (err) {
            console.log(err)
        }
    }
}