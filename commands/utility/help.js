var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Bot's Help Menu.",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dbbbff`)
    .setTitle(" \ Myung's Help Menu \ ")
    .addField('Prefix Information', `Prefix: \`m!\`\nYou can also mention \`Myung\` to get prefix info.`)
    .setDescription(
    `Use \`m!help\` followed by a command name to get more additional information on a command. For example: \`m!help play\`.`
                )

    
    .addField(`**🔨 | MODERATION **`,"`ban`,`unban`,`kick`,`warn`,`mute`,`unmute`,`purge`,`lock`,`unlock`,`createchat`,`createvc`,`delchannel`,`role`,`rolecreate`,`roleadd`,`roledel`,`embed`,`announce`,`vcmove`,`voicekick`,`smove`,`steal`,`define`,`membercount`,`vaportext`,`docs`")
    .addField(`**🛡️ | SETUP & INFO'S **`,"`setmodlog`,`setmute`,`setnick`,`slowmode`,`help`,`av`,`av2`,`channelinfo`,`roleinfo`,`whois`,`anime`,`github`,`applestore`,`country`,`emojiid`,`yt`,`playstore`" )
    .addField(` **🤣 | FUN **`,"`kiss`,`hug`,`pat`,`zaglo`,`slap`,`smug`,`tickle`,`poke`,`binary`,`calculate`,`lovecal`,`meme`,`advice`,`scroll`,`cowsay`")
    .addField(` **🖼 | IMAGE GENERATION **`,"`triggered`,`delete`,`rip`,`jail`,`captcha`,`wideavatar`,`toilet`,`wa`,`clyde`,`wasted`,`effect`,`tweet`,`minecraft`,`blur`,`beautiful`,`catsay`,`fliptext`")
    .addField(` **📜 | Others **`,"`weather`,`country`,`uptime`,`stats`")
    .addField(` **🔗 | LINKS **`,`   [Invite Me](https://discord.com/api/oauth2/authorize?client_id=854003226717585430&permissions=8&scope=bot)`+` - `+`[Support Server](https://discord.gg/z4m8yQcgaX)`)
    .setFooter("Myung by alex_#2726")
    .setTimestamp()

message.channel.send(log);
}
}
}
