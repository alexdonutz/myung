const Discord = module.require("discord.js");

module.exports = {
  config : {
    name: "createchat",
    description: "Create's Voice Channels in your Server."},
    run: async(client, message , args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.channel.send("You don't have enough Permissions")
}
    if (!args[0]) {
    return message.channel.send("Please mention the name for the Channel")
}
    message.guild.channels.create(args.slice(0).join(" "), {type: "chat"});

    const embed = new Discord.MessageEmbed()
    .setTitle("Channel Updates")
    .setDescription(`Channel has been created`)
    .setColor("RANDOM");
  message.channel.send(embed);
}
}