exports.run = async (client, message, args) => {
    let m = await message.channel.send('Opening...')
    if(args[0].includes("file://"))
        return message.channel.send("This link is blacklisted!") 
    try {
        args[0] = args[0].substr(0,4)=="http"?args[0]: `http://${args[0]}`
        await page.goto(args[0])
        m.edit(`:white_check_mark:  Opened ${args[0]}`)
    } catch (e) {
        m.edit(`:x: | Could not open the ${args[0]}!`)
    }
}
