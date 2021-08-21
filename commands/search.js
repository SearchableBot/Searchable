exports.run = async (client, message, args) => {
    message.channel.send('Opening...')
    var arguments = `${args[0]}`;
        var result = arguments.includes("file://");
       
        if(result === true) { 
            message.channel.send("This link is blacklisted!") 
        } else {
    try {   
        await page.goto(args[0])
        message.channel.send('Opened!')
       
    } catch (e) {
        message.channel.send('Could not open!')
    }
}
}
