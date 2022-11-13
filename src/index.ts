const discord = require('discord.js')
const config = require('../config.json')

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.MessageContent,
    ]
})

client.on('messageCreate', (msg: any) => {
    console.log(msg.content)
})

client.login(config.bot_token)