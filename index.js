const puppeteer = require('puppeteer');
const Discord = require("discord.js");
const client = new Discord.Client();
//Client event ready
client.on("ready", async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-remote-extensions'], "headless": false});
    global.page = await browser.newPage();
    await page.goto('http://google.com');
    await page.setViewport({width: 1920, height: 1080});
    console.log('ready as ' + client.user.username)
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
//Bot login
client.login("ODI3NjMwOTM5Nzc2NDgzMzY4.YGd1YA.S0Q_srw3uzwL69599BB-eF0eyUM")
