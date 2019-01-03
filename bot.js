const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
const prefix = "d#";
// Toxic Codes
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("Dream Server",{type: 'WATCHING'});
  
  });// Toxic Codes
client.on("message", message => {
    fs.writeFile('./suck.json', JSON.stringify(suck));
});
// Toxic Codes
client.on('ready', () => {
    setInterval(function(){
        client.guilds.forEach(g => {
            if (suck[g.id]) {
                if (suck[g.id].role) {// Toxic Codes
                    var role = g.roles.get(suck[g.id].role);
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };// Toxic Codes
                };// Toxic Codes 
            };// Toxic Codes
        });
    }, 4000);// Toxic Codes
})

client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");
    var command = args[0].slice(prefix.length);// Toxic Codes
    switch(command) {
        case "set" :
        if(!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINSTRATOR`' );
        message.guild.createRole({name : "drr.", color : "RANDOM"}).then(r => {// Toxic Codes
            r.edit({color : "RANDOM"});
            suck[message.guild.id] = {role : r.id};// Toxic Codes
        });// Toxic Codes
    };// Toxic Codes
});// Toxic Codes

   
client.login(process.env.BOT_TOKEN)
