exports.run = async (client, message, args) => {
  let m = await message.channel.send("Executing Undo ...")
  await page.keyboard.down('Control');
  await page.keyboard.down('ShiftLeft');
  await page.keyboard.press('KeyT');
  await page.keyboard.up('Control');
  await page.keyboard.up('ShiftLeft');
  m.edit(`:x: | Undo finished!`);
}
