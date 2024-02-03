import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIwMzM0NTcwNTc3NTgwMDMyMA.GhKIlG.EKJ-CWD4hK-5Y9VLejwh38VCN0_KcoIs9GkHkY"
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(1203345705775800320), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
