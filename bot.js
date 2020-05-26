const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "#";
// Toxic Codes

const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
 const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const moment = require('moment');
const Canvas = require('canvas')
const jimp = require('jimp')
const sql = require('sqlite')
const ytdl = require("ytdl-core");
let done = {};


const sWlc = {}
const premium = ['608814382343913493']
client.on('message', message => {
var prefix = "*";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name','peace');
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});

      var Canvas = require('canvas')
      var jimp = require('jimp')

      const w = ['./w1.png'];
 
      let Image = Canvas.Image,
         canvas = new Canvas(400, 200),
         ctx = canvas.getContext('2d');
     fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
         if (err) return console.log(err);
         let BG = Canvas.Image;
         let ground = new Image;
         ground.src = Background;
         ctx.drawImage(ground, 0, 0, 400, 200);
          
 
		  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to Wiit.`, 300, 130);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                         
                      
            
         
    welcomer.sendFile(canvas.toBuffer())


});
    member.guild.fetchInvites().then(guildInvites => {
      const ei = guildInvites[member.guild.id];
      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
      const inviter = client.users.get(invite.inviter.id);
       welcomer.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
    }); 
  });
  })
  }})

var adminprefix = "*";
const devs = ['608814382343913493'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
	
     if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Toxic Codes
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
	if (message.content.startsWith(adminprefix + 'sett')) {
  client.user.setGame(argresult, "https://www.twitch.tv/abdoufersaoui_dz");
    message.channel.sendMessage(`تم تغيير تويتش البوت إلى  ${argresult}`)
	}
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
	
}); 



client.login(process.env.BOT_TOKEN)
