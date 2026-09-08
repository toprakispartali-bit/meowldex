const {
  Client,
  GatewayIntentBits
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const balls = {
  "Turkey": "Legendary",
  "Morocco": "Legendary",
  "Egypt": "Legendary",
  "Nigeria": "Legendary",
  "Algeria": "Legendary",

  "USA": "Superpower",
  "China": "Superpower",
  "India": "Superpower",
  "Russia": "Superpower",

  "Xiongnu": "Ancient",
  "Göktürk Khaganate": "Ancient",
  "Ancient Egypt": "Ancient",
  "Babylon": "Ancient",
  "Hittite Empire": "Ancient",
  "Assyrian Empire": "Ancient",
  "Ancient Greece": "Ancient"
};

client.on("interactionCreate", interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "rarity") {
    interaction.reply(
      "🌟 **MeowlDex Rarities** 🌟\n\n" +
      "⚪ Common\n" +
      "🟢 Uncommon\n" +
      "🔵 Rare\n" +
      "🟣 Legendary\n" +
      "🔴 Mythic\n" +
      "💪 Superpower\n" +
      "🏺 Ancient"
    );
  }
});

client.once("ready", () => {
  console.log(`MeowlDex is online as ${client.user.tag}!`);
});

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("rarity")
    .setDescription("Shows the MeowlDex rarity tiers")
].map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  await rest.put(
    Routes.applicationGuildCommands("1545901945057845330", "1527806660129591497"),
    { body: commands }
  );
})();

client.login(process.env.DISCORD_TOKEN);
