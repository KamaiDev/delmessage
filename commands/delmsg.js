module.exports.run = async (bot, message, args) => {
	
	const channel = bot.channels.get(message.channel.id)

  channel.fetchMessages().then(msgs => {
  if (msgs.size <= 0) return
  msgs.filter(u => u.author.id == bot.user.id).forEach(async msg => {

  await console.log(msg.content)

   await msg.delete().catch(err => { console.log(err) })
   })
  }).catch(err => { console.log(err) })
}

module.exports.help = {
  name: "delmsg",
  categoty: "delmsg"
}