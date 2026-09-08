const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle
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
  
"Tunisia": "Rare",
"South Africa": "Rare",
"Central African Republic": "Rare",

"DR Congo": "Uncommon",
"Namibia": "Uncommon",
"Niger": "Uncommon",
"Libya": "Uncommon",

  "Angola": "Common",
"Botswana": "Common",
"Burkina Faso": "Common",
"Burundi": "Common",
"Cabo Verde": "Common",
"Cameroon": "Common",
"Chad": "Common",
"Comoros": "Common",
"Republic of the Congo": "Common",
"Djibouti": "Common",
"Equatorial Guinea": "Common",
"Eritrea": "Common",
"Eswatini": "Common",
"Ethiopia": "Common",
"Gabon": "Common",
"Gambia": "Common",
"Ghana": "Common",
"Guinea": "Common",
"Guinea-Bissau": "Common",
"Kenya": "Common",
"Lesotho": "Common",
"Liberia": "Common",
"Madagascar": "Common",
"Malawi": "Common",
"Mali": "Common",
"Mauritania": "Common",
"Mauritius": "Common",
"Mozambique": "Common",
"Rwanda": "Common",
"São Tomé and Príncipe": "Common",
"Senegal": "Common",
"Seychelles": "Common",
"Sierra Leone": "Common",
"Somalia": "Common",
"South Sudan": "Common",
"Sudan": "Common",
"Tanzania": "Common",
"Togo": "Common",
"Uganda": "Common",
"Zambia": "Common",
"Zimbabwe": "Common",


"Vatican City": "Legendary",
"France": "Legendary",
"United Kingdom": "Legendary",
"England": "Legendary",
"Poland": "Legendary",
"Italy": "Legendary",
"Norway": "Legendary",
"Spain": "Legendary",
"Switzerland": "Legendary",

"Romania": "Rare",
"Bulgaria": "Rare",
"Austria": "Rare",
"Hungary": "Rare",
"Belgium": "Rare",
"Netherlands": "Rare",
"Luxembourg": "Rare",
"Portugal": "Rare",
"Denmark": "Rare",
"Finland": "Rare",
"Iceland": "Rare",
"Sweden": "Rare",
"Scotland": "Rare",
"Wales": "Rare",
"Ukraine": "Rare",
"Germany": "Rare",
"Serbia": "Uncommon",
"Bosnia and Herzegovina": "Uncommon",
"Czechia": "Uncommon",
"Northern Ireland": "Uncommon",

"Albania": "Common",
"Andorra": "Common",
"Belarus": "Common",
"Croatia": "Common",
"Cyprus": "Common",
"Estonia": "Common",
"Ireland": "Common",
"Latvia": "Common",
"Liechtenstein": "Common",
"Lithuania": "Common",
"Malta": "Common",
"Moldova": "Common",
"Monaco": "Common",
"Montenegro": "Common",
"North Macedonia": "Common",
"San Marino": "Common",
"Slovakia": "Common",
"Slovenia": "Common",
"Kosovo": "Common",

"Pakistan": "Legendary",
"Japan": "Legendary",
"South Korea": "Legendary",
"Afghanistan": "Legendary",
"Kazakhstan": "Legendary",
"Indonesia": "Legendary",
"Vietnam": "Legendary",
"Singapore": "Legendary",
"North Korea": "Rare",
"Turkmenistan": "Rare",
"Uzbekistan": "Rare",
"Thailand": "Rare",
"Azerbaijan": "Rare",
"Georgia": "Rare",
"Kyrgyzstan": "Rare",
"Mongolia": "Rare",
"Philippines": "Rare",
"Bangladesh": "Rare",
"Bhutan": "Rare",
"Armenia": "Uncommon",
"Myanmar": "Uncommon",
"Sri Lanka": "Uncommon",

  "Brunei": "Common",
"Cambodia": "Common",
"Laos": "Common",
"Malaysia": "Common",
"Nepal": "Common",
"Taiwan": "Common",
"Tajikistan": "Common",
"Timor-Leste": "Common",
"Saudi Arabia": "Legendary",
"Palestine": "Legendary",
"UAE": "Legendary",
"Iran": "Legendary",
"Iraq": "Rare",
"Syria": "Rare",
"Yemen": "Rare",
"Qatar": "Uncommon",
"Bahrain": "Common",
"Kuwait": "Common",
"Lebanon": "Common",
"Jordan": "Common",
"Oman": "Common",

"Brazil": "Legendary",
"Mexico": "Legendary",
"Canada": "Legendary",
"Chile": "Legendary",
"Argentina": "Legendary",
"Colombia": "Legendary",

"Venezuela": "Rare",
"Uruguay": "Rare",
"Paraguay": "Rare",
"Ecuador": "Rare",
"Peru": "Rare",

"Jamaica": "Uncommon",
"El Salvador": "Uncommon",
"Panama": "Uncommon",

"Antigua and Barbuda": "Common",
"Bahamas": "Common",
"Barbados": "Common",
"Belize": "Common",
"Costa Rica": "Common",
"Cuba": "Common",
"Dominica": "Common",
"Dominican Republic": "Common",
"Grenada": "Common",
"Guatemala": "Common",
"Haiti": "Common",
"Honduras": "Common",
"Nicaragua": "Common",
"Saint Kitts and Nevis": "Common",
"Saint Lucia": "Common",
"Saint Vincent and the Grenadines": "Common",
"Trinidad and Tobago": "Common",
"Bolivia": "Common",
"Guyana": "Common",
"Suriname": "Common",

"Australia": "Legendary",
"New Zealand": "Rare",
"Papua New Guinea": "Uncommon",
"Fiji": "Common",
"Solomon Islands": "Common",
"Vanuatu": "Common",
"Samoa": "Common",
"Tonga": "Common",
"Kiribati": "Common",
"Micronesia": "Common",
"Marshall Islands": "Common",
"Palau": "Common",
"Nauru": "Common",
"Tuvalu": "Common",
"Antarctica": "Legendary",
"Almohad Caliphate": "Superpower",
"Dacian Kingdom": "Legendary",
  "USA": "Superpower",
  "China": "Superpower",
  "India": "Superpower",
  "Russia": "Superpower",
    "Ottoman Empire": "Superpower",
"British Empire": "Superpower",
"Roman Empire": "Superpower",
"Mongol Empire": "Superpower",
"Napoleonic France": "Superpower",
"Spanish Empire": "Superpower",
"Portuguese Empire": "Superpower",
"Achaemenid Empire": "Superpower",
"Han Dynasty": "Superpower",
"Qing Dynasty": "Superpower",
"Austria-Hungary": "Superpower",
"German Empire": "Superpower",
"Nazi Germany": "Superpower",
"Umayyad Caliphate": "Superpower",
"Seljuk Empire": "Superpower",

  "Xiongnu": "Ancient",
  "Göktürk Khaganate": "Ancient",
  "Ancient Egypt": "Ancient",
  "Babylon": "Ancient",
  "Hittite Empire": "Ancient",
  "Assyrian Empire": "Ancient",
  "Ancient Greece": "Ancient",
"Alaouite Dynasty": "Ancient",
  "Sumer": "Ancient",
"Carthage": "Ancient",
"Minoan Civilization": "Ancient",
"Mycenaean Greece": "Ancient",
"Maya Civilization": "Ancient",
"Aztec Empire": "Ancient",
"Inca Empire": "Ancient"
};

const flagCodes = {
  "France": "fr",
  "Morocco": "ma",
  "Japan": "jp",
  "Germany": "de",
  "Romania": "ro"
};

const collections = {};
const activeSpawns = new Map();
const testSpawns = new Set();
let messagesUntilSpawn = Math.floor(Math.random() * 20) + 10;

client.on("messageCreate", async message => {
  if (message.author.bot) return;

  messagesUntilSpawn--;

  console.log(`Messages until spawn: ${messagesUntilSpawn}`);
  
  if (messagesUntilSpawn <= 0 && activeSpawns.size === 0) {
  const availableBalls = Object.keys(flagCodes);
const selectedBall =
  availableBalls[Math.floor(Math.random() * availableBalls.length)];

  const catchButton = new ButtonBuilder()
    .setCustomId("catch_ball")
    .setLabel("Catch")
    .setStyle(ButtonStyle.Primary);

  const row = new ActionRowBuilder().addComponents(catchButton);

  const spawnMessage = await message.channel.send({
    content: "A wild country ball appeared!",
    files: [`https://flagcdn.com/w320/${flagCodes[selectedBall]}.png`],
    components: [row]
  });

   activeSpawns.set(spawnMessage.id, selectedBall);

messagesUntilSpawn = Math.floor(Math.random() * 20) + 10;
}
});

client.on("interactionCreate", async interaction => {

  if (interaction.commandName === "rarity") {
    interaction.reply(
  "🌟 **MeowlDex Rarities** 🌟\n\n" +
  "⚪ **Common**\n" +
  "🟢 **Uncommon**\n" +
  "🔵 **Rare**\n" +
  "🟣 **Legendary**\n" +
  "🔴 **Mythic**\n" +
  "💪 **Superpower**\n" +
  "🏺 **Ancient**\n\n" +
  "**Ancient Balls:**\n" +
  "• Xiongnu\n" +
  "• Göktürk Khaganate\n" +
  "• Ancient Egypt\n" +
  "• Babylon\n" +
  "• Hittite Empire\n" +
  "• Assyrian Empire\n" +
  "• Ancient Greece"
);
  }

if (interaction.commandName === "spawn") {
  const selectedBall = "Turkey";

  const catchButton = new ButtonBuilder()
    .setCustomId("catch_ball")
    .setLabel("Catch")
    .setStyle(ButtonStyle.Primary);

  const row = new ActionRowBuilder().addComponents(catchButton);

  await interaction.reply({
    content: "A wild country ball appeared!",
    files: ["./turkey.png"],
    components: [row]
  });

  const spawnMessage = await interaction.fetchReply();

  activeSpawns.set(spawnMessage.id, selectedBall);
}

  if (interaction.isButton() && interaction.customId === "catch_ball") {
    const ball = activeSpawns.get(interaction.message.id);

if (!ball) {
  return interaction.reply({
    content: "This ball was already caught!",
    ephemeral: true
  });
}
  const modal = new ModalBuilder()
  .setCustomId(`guess_ball_${interaction.message.id}`)
    .setTitle("Catch the ball!");

  const guessInput = new TextInputBuilder()
    .setCustomId("ball_guess")
    .setLabel("Which ball is this?")
    .setStyle(TextInputStyle.Short)
    .setRequired(true);

  const row = new ActionRowBuilder().addComponents(guessInput);

  modal.addComponents(row);

  await interaction.showModal(modal);
}
if (interaction.isModalSubmit() && interaction.customId.startsWith("guess_ball_")) {
  const spawnMessageId = interaction.customId.replace("guess_ball_", "");
const currentBall = activeSpawns.get(spawnMessageId);

  if (!currentBall) {
    return interaction.reply({
      content: `${interaction.user}, this ball was already caught!`
    });
  }

  const guess = interaction.fields.getTextInputValue("ball_guess").trim();

  if (guess.toLowerCase() === currentBall.toLowerCase()) {
    const correctMessages = [
      `${interaction.user} was correct and got **${currentBall}**!`,
      `${interaction.user} caught **${currentBall}**!`,
      `${interaction.user} got it! It was **${currentBall}**!`,
      `${interaction.user} guessed correctly! The ball was **${currentBall}**!`,
      `${interaction.user} successfully caught **${currentBall}**!`
    ];

    const randomMessage =
      correctMessages[Math.floor(Math.random() * correctMessages.length)];

    await interaction.reply({
  content: randomMessage
});

const disabledButton = new ButtonBuilder()
  .setCustomId("catch_ball")
  .setLabel("Caught!")
  .setStyle(ButtonStyle.Secondary)
  .setDisabled(true);

const disabledRow = new ActionRowBuilder().addComponents(disabledButton);

await interaction.message.edit({
  components: [disabledRow]
});

    activeSpawns.delete(spawnMessageId);
  } else {
    await interaction.reply({
      content: `${interaction.user} guessed the wrong ball!`
    });
  }
}
  
if (interaction.commandName === "collection") {
  const userId = interaction.user.id;
  const collection = collections[userId] || [];

  if (collection.length === 0) {
    return interaction.reply(
      `📚 **${interaction.user.username}'s MeowlDex Collection**\n\n` +
      `You haven't caught any balls yet!`
    );
  }

  interaction.reply(
    `📚 **${interaction.user.username}'s MeowlDex Collection**\n\n` +
    collection.join("\n")
  );
}
});

const commands = [
  new SlashCommandBuilder()
    .setName("rarity")
    .setDescription("Shows the MeowlDex rarity tiers"),

  new SlashCommandBuilder()
    .setName("collection")
    .setDescription("Shows your MeowlDex collection"),

  new SlashCommandBuilder()
    .setName("compare")
    .setDescription("Compare your collection with another user")
    .addUserOption(option =>
      option
        .setName("user")
        .setDescription("The user to compare with")
        .setRequired(true)
        ),

  new SlashCommandBuilder()
    .setName("spawn")
    .setDescription("Spawns a test MeowlDex ball")
].map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  await rest.put(
Routes.applicationGuildCommands("1546632087430373416", "1527806660129591497"),
    { body: commands }
  );
})();

client.login(process.env.DISCORD_TOKEN);
