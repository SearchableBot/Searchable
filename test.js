exports.run = async (client, message, args) => {
    message.channel.send('Opening...')
    await page.goto(args[0])
}
// https://github.com/phillipj/node-plex-api
