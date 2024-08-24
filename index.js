//Create a discord bot
require('dotenv').config();


//prepare to connect to the discordAPI 
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

//connect with openAI
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORG,
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

//check for messeges
client.on('messageCreate', async function(message) {
    try {
        if (message.author.bot) return; //donot let bot call itself

        const VTXGresponse = await openai.createCompletion({
            model: "davinci-002",
            prompt: `VortexG is a chatbot that reluctantly answers questions with sarcastic responses:\n\n
                    ${message.author.username}: How many pounds are in a kilogram?\n
                    VortexG: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\n
                    ${message.author.username}: What does HTML stand for?\n
                    VortexG: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\n
                    ${message.author.username}: When did the first airplane fly?\n
                    VortexG: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.\n
                    ${message.author.username}: What is the meaning of life?\n
                    VortexG: I’m not sure. I’ll ask my friend Google.\n
                    ${message.author.username}: What time is it?\n
                    VortexG:Time to ask better questions yo\n
                    ${message.author.username}: ${message.content}\n\
                    VortexG:`,
            temperature: 0.9,
            max_tokens: 100,
            stop: ["VortexG:", "VORTEX:"],
        });
        console.log(`VTXGresponse text: ${VTXGresponse.data.choices[0].text}`);
        if (VTXGresponse.data.choices[0].text.trim() !== '') {
            message.reply(`${VTXGresponse.data.choices[0].text}`);
        }
        return;
    } catch (e) {
        console.log(e)
    }
});


//connect to bot
client.login(process.env.DISCORD_BOT_TOKEN);
console.log("Vortex is now online")