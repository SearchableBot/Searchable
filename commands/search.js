exports.run = async (client, message, args) => {
    let m = await message.channel.send('Opening...')
    if(args[0].includes("file://"))
        return message.channel.send("This link is blacklisted!") 
    try {
        args[0] = args[0].substr(0,4)=="http"?args[0]: `http://${args[0]}`
        if(/^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(learnRegExp.arguments[0]))
            return m.edit(":x: | This url is not valid");
        await page.goto(args[0])
        m.edit(`:x: Opened (this url)[${args[0]}]`)
    } catch (e) {
        m.edit(`:x: | Could not open the (url)[${args[0]}]!`)
    }
}
