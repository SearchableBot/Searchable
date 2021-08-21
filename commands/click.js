exports.run = async (client, message, args) => {
message.channel.send(args[0]+" "+args[1]);
  if(!args[0] || !args[1] || isNaN(args[0]) || isNaN(args[1]))
    return message.channel.send("Proper format: pc!click {X} {Y}");
  let x = Math.floor(args[0]), y = Math.floor(args[1]);
  if(x < 0 || y < 0)
    return message.channel.send("Value has to be grater than 0");
  if(x > 1920)
    return message.channel.send("X coordinate is bigger than the window size. Current window size: 1920x1080");
  if(y > 1080)
    return message.channel.send("Y coordinate is bigger than the window size. Current window size: 1920x1080");
  await page.mouse.click(x, y); //You can add left or right click too, but fuck this im out
}
