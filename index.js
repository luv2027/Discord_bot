const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hello from bot",
  });
});

client.login(
  "MTIwMzM0NTcwNTc3NTgwMDMyMA.GhKIlG.EKJ-CWD4hK-5Y9VLejwh38VCN0_KcoIs9GkHkY"
);
