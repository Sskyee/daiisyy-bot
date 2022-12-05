const TOKEN = require("dotenv").config()
const { Client } = require('discord.js');

const client = new Client({
    intents: [
        1,
        2,
        512,
        32768
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "*load"){
        message.reply("All contents loaded... Hello User~")
    }
})

client.login(process.env.TOKEN)