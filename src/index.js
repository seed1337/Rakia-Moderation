const { Client, IntentsBitField, Guild } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`😀 ${c.user.tag} is connected`);
})

client.on('messageCreate', (message) => {
  // Check if the message is in a specific category
  if (
    message.channel.parent &&
    message.channel.parent.name === "tickets" &&
    ["not launching", "launch", "wont launch"].some((word) =>
      message.content.toLowerCase().includes(word)
    )
  ) {
    message.channel.send(
      "``Important to note⚠️``\n Its important to note that you must run the loader as an administrator in order for it to work properly. Right-click on the RAKIALoader shortcut and select Run as administrator from the context menu"
    );
  }
});

client.login(
  "MTEwNDUzNTc3MDMwNTQxNzI4Ng.GD3oZg.AKXG3CE0GIlTb0Kh9QvNAPMrgsHYqlQs-WTESU"
);
