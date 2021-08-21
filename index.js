//DISCORD CLIENT
const Discord = require("discord.js");
const client = new Discord.Client();

//CONFIGURATION FILES
const auth = require("./jsons/auth.json");
const config = require("./jsons/config.json");

//GENERAL DEFINITIONS
const puppeteer = require('puppeteer');

//READY EVENT
client.on("ready", async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-remote-extensions'], "headless": false});
    global.page = await browser.newPage();
    await page.goto(config.defaultpage);
    await page.setViewport({width: 1920, height: 1080});
    console.log(config.readymessage)
});

client.on('message', async (message) => {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        const prefix = "pc!";
        if (message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandargs = message.content.split(' ').slice(1).join(' ');
        const command = args.shift().toLowerCase();
        console.log(`[${message.author.username}] [${message.author.id}] >> ${prefix}${command} ${commandargs}`);
        try {
            let commandFile = require(`./commands/${command}.js`);
            commandFile.run(client, message, args);
        } catch (err) {
            console.log(err)
        }
})

//BOT LOGIN
client.login(auth.token)
