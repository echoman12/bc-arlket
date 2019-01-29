const prefix = 'w'
const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});








client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};    
});




const adminprefix = "-$";//FRAS
const devs = ['498566145071120385','539566922598187024'];//FRAS
client.on('message', message => {//FRAS
  var argresult = message.content.split(` `).slice(1).join(' ');//FRAS
    if (!devs.includes(message.author.id)) return;//FRAS
    
if (message.content.startsWith(adminprefix + 'play')) {//fras
  client.user.setGame(argresult);//fras
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)//fras
} else //fras
  if (message.content.startsWith(adminprefix + 'name')) {//fras
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});



client.login(process.env.BOT_TOKEN);
