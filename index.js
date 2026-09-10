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


const balls = {
  "Turkey": "Legendary",
  "Morocco": "Legendary",
  "Egypt": "Legendary",
  "Nigeria": "Legendary",
  "Algeria": "Legendary",
  
"Tunisia": "Rare",
"South Africa": "Rare",
"Central African Republic": "Rare",

"Democratic Republic of the Congo": "Uncommon",
"Namibia": "Uncommon",
"Niger": "Uncommon",
"Libya": "Uncommon",

  "Angola": "Common",
"Botswana": "Common",
"Burkina Faso": "Common",
"Burundi": "Common",
"Cape Verde": "Rare",
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
"United Arab Emirates": "Legendary",
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
  "United States of America": "Superpower",
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
  "Soviet Union": "Superpower",

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
"Inca Empire": "Ancient",
  "Desert Rivals": "CraftBall"
};

const flagCodes = {
  "Turkey": "tr",
  "France": "fr",
  "United Kingdom": "gb",
  "Poland": "pl",
  "Italy": "it",
  "Norway": "no",
  "Spain": "es",
  "Switzerland": "ch",
  "Romania": "ro",
  "Bulgaria": "bg",
  "Austria": "at",
  "Hungary": "hu",
  "Belgium": "be",
  "Netherlands": "nl",
  "Luxembourg": "lu",
  "Portugal": "pt",
  "Denmark": "dk",
  "Finland": "fi",
  "Iceland": "is",
  "Sweden": "se",
  "Ukraine": "ua",
  "Germany": "de",
  "Serbia": "rs",
  "Bosnia and Herzegovina": "ba",
  "Czechia": "cz",
  "Albania": "al",
  "Andorra": "ad",
  "Belarus": "by",
  "Croatia": "hr",
  "Cyprus": "cy",
  "Estonia": "ee",
  "Ireland": "ie",
  "Latvia": "lv",
  "Liechtenstein": "li",
  "Lithuania": "lt",
  "Malta": "mt",
  "Moldova": "md",
  "Monaco": "mc",
  "Montenegro": "me",
  "North Macedonia": "mk",
  "San Marino": "sm",
  "Slovakia": "sk",
  "Slovenia": "si",
  "Kosovo": "xk",
  "Vatican City": "va",
"Russia": "ru",
"England": "gb-eng",
"Scotland": "gb-sct",
"Wales": "gb-wls",
"Northern Ireland": "gb-nir",
  "Pakistan": "pk",
"Japan": "jp",
"South Korea": "kr",
"Afghanistan": "af",
"Kazakhstan": "kz",
"Indonesia": "id",
"Vietnam": "vn",
"Singapore": "sg",
"North Korea": "kp",
"Turkmenistan": "tm",
"Uzbekistan": "uz",
"Thailand": "th",
"Azerbaijan": "az",
"Georgia": "ge",
"Kyrgyzstan": "kg",
"Mongolia": "mn",
"Philippines": "ph",
"Bangladesh": "bd",
"Bhutan": "bt",
"Armenia": "am",
"Myanmar": "mm",
"Sri Lanka": "lk",
"Brunei": "bn",
"Cambodia": "kh",
"Laos": "la",
"Malaysia": "my",
"Nepal": "np",
"Taiwan": "tw",
"Tajikistan": "tj",
"Timor-Leste": "tl",
  "Saudi Arabia": "sa",
"Palestine": "ps",
"United Arab Emirates": "ae",
"Iran": "ir",
"Iraq": "iq",
"Syria": "sy",
"Yemen": "ye",
"Qatar": "qa",
"Bahrain": "bh",
"Kuwait": "kw",
"Lebanon": "lb",
"Jordan": "jo",
"Oman": "om",
"Algeria": "dz",
"Nigeria": "ng",
"Egypt": "eg",
"Tunisia": "tn",
"South Africa": "za",
"Central African Republic": "cf",
"Democratic Republic of the Congo": "cd",
"Namibia": "na",
"Niger": "ne",
"Libya": "ly",
"Angola": "ao",
"Botswana": "bw",
"Burkina Faso": "bf",
"Burundi": "bi",
"Cape Verde": "cv",
"Cameroon": "cm",
"Chad": "td",
"Comoros": "km",
"Republic of the Congo": "cg",
"Djibouti": "dj",
"Equatorial Guinea": "gq",
"Eritrea": "er",
"Eswatini": "sz",
"Ethiopia": "et",
"Gabon": "ga",
"Gambia": "gm",
"Ghana": "gh",
"Guinea": "gn",
"Guinea-Bissau": "gw",
"Kenya": "ke",
"Lesotho": "ls",
"Liberia": "lr",
"Madagascar": "mg",
"Malawi": "mw",
"Mali": "ml",
"Mauritania": "mr",
"Mauritius": "mu",
"Mozambique": "mz",
"Rwanda": "rw",
"São Tomé and Príncipe": "st",
"Senegal": "sn",
"Seychelles": "sc",
"Sierra Leone": "sl",
"Somalia": "so",
"South Sudan": "ss",
"Sudan": "sd",
"Tanzania": "tz",
"Togo": "tg",
"Uganda": "ug",
"Zambia": "zm",
"Zimbabwe": "zw",
  "Morocco": "ma",
  "United States of America": "us",
"Brazil": "br",
"Mexico": "mx",
"Canada": "ca",
"Chile": "cl",
"Argentina": "ar",
"Colombia": "co",
"Venezuela": "ve",
"Uruguay": "uy",
"Paraguay": "py",
"Ecuador": "ec",
"Peru": "pe",
"Jamaica": "jm",
"El Salvador": "sv",
"Panama": "pa",
"Antigua and Barbuda": "ag",
"Bahamas": "bs",
"Barbados": "bb",
"Belize": "bz",
"Costa Rica": "cr",
"Cuba": "cu",
"Dominica": "dm",
"Dominican Republic": "do",
"Grenada": "gd",
"Guatemala": "gt",
"Haiti": "ht",
"Honduras": "hn",
"Nicaragua": "ni",
"Saint Kitts and Nevis": "kn",
"Saint Lucia": "lc",
"Saint Vincent and the Grenadines": "vc",
"Trinidad and Tobago": "tt",
"Bolivia": "bo",
"Guyana": "gy",
"Suriname": "sr",
  "Australia": "au",
"New Zealand": "nz",
"Papua New Guinea": "pg",
"Fiji": "fj",
"Solomon Islands": "sb",
"Vanuatu": "vu",
"Samoa": "ws",
"Tonga": "to",
"Kiribati": "ki",
"Micronesia": "fm",
"Marshall Islands": "mh",
"Palau": "pw",
"Nauru": "nr",
"Tuvalu": "tv",
"Antarctica": "aq"
};

const customArt = {
  "Turkey": "./turkey.png",
  "Saudi Arabia": "./saudi-arabia.png",
  "Algeria": "./algeria.png",
  "Morocco": "./morocco.png",
  "Soviet Union": "./soviet-union.png",
  "Desert Rivals": "./desert-rivals.png",
  "Libya": "./libya.png"
};

const ballAliases = {
  "Democratic Republic of the Congo": [
    "DR Congo",
    "DRC",
    "Democratic Republic of Congo"
  ],

  "United States of America": [
    "United States"
  ],

  "United Kingdom": [
    "Britain",
    "Great Britain"
  ],
  
  "Turkey": [
    "Turkiye"
  ],
  
  "Nauru": [
    "Naoero"
  ],

  "Cape Verde": [
    "Cabo Verde"
  ],

  "Myanmar": [
    "Burma"
  ],
  "Timor-Leste": [
    "East Timor"
  ]
};

const rarityWeights = {
  "Common": 49,
  "Uncommon": 24,
  "Rare": 15,
  "Legendary": 7,
  "Mythic": 3,
  "Superpower": 2,
  "Ancient": 1,
};

const spawnMultipliers = {
  "Soviet Union": 0.35
};


const spawnChannelByGuild = {
  "1538863607474028554": "1546803046053576704",
  "1527806660129591497": "1527808233366880277"
};

const craftRecipes = {
  "desert rivals": {
    ingredients: ["Morocco", "Algeria"],
    result: "Desert Rivals"
  },

  "european union": {
    ingredients: ["France", "Germany"],
    result: "European Union"
  },

  "soviet union": {
  ingredients: [
    "Russia",
    "Ukraine",
    "Belarus",
    "Kazakhstan",
    "Estonia",
    "Latvia",
    "Lithuania",
    "Georgia",
    "Armenia",
    "Azerbaijan",
    "Uzbekistan",
    "Turkmenistan",
    "Kyrgyzstan",
    "Tajikistan",
    "Moldova"
  ],
  result: "Soviet Union"
}
};


const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});
const SPAWN_LIFETIME = 4 * 60 * 1000;
const expiryTimers = new Map();
let messagesUntilSpawn = Math.floor(Math.random() * 20) + 10;
let autoSpawnInProgress = false;

function statement(sql, args = []) {
  return { sql, args: args.map(value => ({ type: 'text', value: String(value) })), want_rows: true };
}

async function databaseRequest(request) {
  const url = process.env.TURSO_DATABASE_URL.replace('libsql://', 'https://').replace(/\/$/, '') + '/v2/pipeline';
  const response = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.TURSO_AUTH_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ requests: [request, { type: 'close' }] })
  });
  if (!response.ok) throw new Error(`Database HTTP error: ${response.status}`);
  const data = await response.json();
  const result = data.results?.[0];
  if (result?.type !== 'ok' || !result.response?.result) {
    throw new Error(result?.error?.message || 'Database returned no result.');
  }
  return result.response.result;
}

async function query(sql, args = []) {
  return databaseRequest({ type: 'execute', stmt: statement(sql, args) });
}

// Each step runs only after the previous step succeeds. Any failed step rolls back.
async function transaction(statements) {
  const steps = [{ stmt: statement('BEGIN IMMEDIATE') }];
  for (const item of statements) {
    steps.push({ condition: { type: 'ok', step: steps.length - 1 }, stmt: item });
  }
  const commitIndex = steps.length;
  steps.push({ condition: { type: 'ok', step: commitIndex - 1 }, stmt: statement('COMMIT') });
  steps.push({
    condition: { type: 'and', conds: [
      { type: 'ok', step: 0 },
      { type: 'not', cond: { type: 'ok', step: commitIndex } }
    ] },
    stmt: statement('ROLLBACK')
  });
  const batch = await databaseRequest({ type: 'batch', batch: { steps } });
  if (!batch.step_results?.[commitIndex] || batch.step_errors?.some(Boolean)) {
    throw new Error(batch.step_errors?.find(Boolean)?.message || 'Transaction was not confirmed.');
  }
  return batch.step_results.slice(1, commitIndex);
}

async function setupTursoDatabase() {
  await query(`CREATE TABLE IF NOT EXISTS collections (
    user_id TEXT NOT NULL, ball_name TEXT NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1, PRIMARY KEY (user_id, ball_name)
  )`);
  await query(`CREATE TABLE IF NOT EXISTS active_spawns (
    message_id TEXT PRIMARY KEY, ball_name TEXT NOT NULL,
    is_test INTEGER NOT NULL DEFAULT 0, expires_at INTEGER NOT NULL,
    channel_id TEXT NOT NULL DEFAULT ''
  )`);
  const info = await query('PRAGMA table_info(active_spawns)');
  if (!info.rows.some(row => row[1].value === 'channel_id')) {
    await query("ALTER TABLE active_spawns ADD COLUMN channel_id TEXT NOT NULL DEFAULT ''");
  }
  console.log('MeowlDex database ready!');
}

function normalize(text) {
  return String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function allBallNames() {
  return [...new Set([...Object.keys(balls), ...Object.values(craftRecipes).map(recipe => recipe.result)])];
}

function resolveBall(input, names = allBallNames()) {
  return names.find(name => [name, ...(ballAliases[name] || [])].some(alias => normalize(alias) === normalize(input)));
}

function suggestions(names, input) {
  const search = normalize(input);
  function score(text) {
    const name = normalize(text);
    if (!search || name.startsWith(search)) return 0;
    if (name.includes(search)) return 1;
    let position = 0;
    for (const letter of name) {
      if (letter === search[position]) position++;
      if (position === search.length) return name.startsWith(search[0]) ? 2 : 2.5;
    }
    return 3;
  }
  return [...new Set(names)].map(name => ({ name,
    score: Math.min(...[name, ...(ballAliases[name] || [])].map(score))
  })).filter(item => item.score < 3)
    .sort((a, b) => a.score - b.score || a.name.localeCompare(b.name))
    .slice(0, 25).map(item => ({ name: item.name.slice(0, 100), value: item.name }));
}

function pickWeightedBall() {
  const available = Object.keys(balls).filter(name =>
    (flagCodes[name] || customArt[name]) &&
    Number.isFinite(rarityWeights[balls[name]]) && rarityWeights[balls[name]] > 0
  );
  if (!available.length) throw new Error('No balls have both an image and a spawn weight.');
  const rarities = [...new Set(available.map(name => balls[name]))];
  let roll = Math.random() * rarities.reduce((sum, rarity) => sum + rarityWeights[rarity], 0);
  let chosenRarity = rarities[rarities.length - 1];
  for (const rarity of rarities) {
    roll -= rarityWeights[rarity];
    if (roll < 0) { chosenRarity = rarity; break; }
  }
  const pool = available.filter(name => balls[name] === chosenRarity);
  const weight = name => Math.max(1, Math.round((spawnMultipliers[name] ?? 1) * 100));
  roll = Math.random() * pool.reduce((sum, name) => sum + weight(name), 0);
  for (const name of pool) {
    roll -= weight(name);
    if (roll < 0) return name;
  }
  return pool[pool.length - 1];
}

function catchRow(disabled = false, label = 'Catch') {
  return new ActionRowBuilder().addComponents(new ButtonBuilder()
    .setCustomId('catch_ball').setLabel(label)
    .setStyle(disabled ? ButtonStyle.Secondary : ButtonStyle.Primary).setDisabled(disabled));
}

async function loadSavedSpawn(messageId) {
  const result = await query(`SELECT ball_name, is_test, expires_at, channel_id
    FROM active_spawns WHERE message_id = ?`, [messageId]);
  const row = result.rows[0];
  if (!row || (Number(row[2].value) !== 0 && Number(row[2].value) <= Date.now())) return null;
  return { ballName: row[0].value, isTest: Number(row[1].value) === 1,
    expiresAt: Number(row[2].value), channelId: row[3].value };
}

async function claimSavedSpawn(messageId, userId, ballName) {
  const now = Date.now();
  const results = await transaction([
    statement(`INSERT INTO collections (user_id, ball_name, quantity)
      SELECT ?, ball_name, 1 FROM active_spawns
      WHERE message_id = ? AND ball_name = ? AND is_test = 0
        AND (expires_at = 0 OR expires_at > ?)
      ON CONFLICT(user_id, ball_name) DO UPDATE SET quantity = collections.quantity + 1`,
    [userId, messageId, ballName, now]),
    statement(`DELETE FROM active_spawns WHERE message_id = ? AND ball_name = ?
      AND (expires_at = 0 OR expires_at > ?) RETURNING ball_name, is_test`,
    [messageId, ballName, now])
  ]);
  const row = results[1].rows[0];
  return row ? { ballName: row[0].value, isTest: Number(row[1].value) === 1 } : null;
}

async function transferBall(sender, recipient, ballName) {
  if (sender === recipient) throw new Error('Cannot transfer to yourself.');
  const result = await query(`WITH transfer(user_id, delta) AS (VALUES (?, -1), (?, 1))
    INSERT INTO collections (user_id, ball_name, quantity)
    SELECT transfer.user_id, owned.ball_name, transfer.delta
    FROM collections AS owned CROSS JOIN transfer
    WHERE owned.user_id = ? AND owned.ball_name = ? AND owned.quantity > 0
    ON CONFLICT(user_id, ball_name)
    DO UPDATE SET quantity = collections.quantity + excluded.quantity`,
  [sender, recipient, sender, ballName]);
  return Number(result.affected_row_count) === 2;
}

// Check ingredients and apply all changes in one statement, including during transfers.
async function craftBall(userId, recipe) {
  const required = [...new Set(recipe.ingredients)];
  const deltas = [...required.map(name => [name, -1]), [recipe.result, 1]];
  const result = await query(`WITH deltas(ball_name, delta) AS (
      VALUES ${deltas.map(() => '(?, ?)').join(', ')}
    )
    INSERT INTO collections (user_id, ball_name, quantity)
    SELECT ?, deltas.ball_name, CAST(deltas.delta AS INTEGER) FROM deltas
    WHERE (SELECT COUNT(*) FROM collections WHERE user_id = ? AND quantity > 0
      AND ball_name IN (${required.map(() => '?').join(', ')})) = CAST(? AS INTEGER)
    ON CONFLICT(user_id, ball_name)
    DO UPDATE SET quantity = collections.quantity + excluded.quantity`,
  [...deltas.flat(), userId, userId, ...required, required.length]);
  return Number(result.affected_row_count) > 0;
}

function clearExpiry(messageId) {
  clearTimeout(expiryTimers.get(messageId));
  expiryTimers.delete(messageId);
}

async function expireSpawn(messageId, channelId) {
  clearExpiry(messageId);
  const removed = await query(`DELETE FROM active_spawns
    WHERE message_id = ? AND is_test = 0 AND expires_at <= ? RETURNING message_id`,
  [messageId, Date.now()]);
  if (!removed.rows.length) return;
  if (!channelId) return;
  try {
    const channel = await client.channels.fetch(channelId);
    await channel.messages.delete(messageId);
  } catch (error) {
    console.error('Could not delete expired spawn message:', error.message);
  }
}

function scheduleExpiry(messageId, channelId, expiresAt) {
  clearExpiry(messageId);
  const timer = setTimeout(() => {
    expireSpawn(messageId, channelId).catch(error => console.error('SPAWN EXPIRY ERROR:', error));
  }, Math.max(0, expiresAt - Date.now()));
  timer.unref?.();
  expiryTimers.set(messageId, timer);
}

async function restoreSpawnTimers() {
  const saved = await query('SELECT message_id, channel_id, expires_at FROM active_spawns WHERE is_test = 0');
  for (const row of saved.rows) scheduleExpiry(row[0].value, row[1].value, Number(row[2].value));
}

async function saveSpawn(message, ballName, isTest) {
  const expiresAt = isTest ? 0 : Date.now() + SPAWN_LIFETIME;
  await query(`INSERT INTO active_spawns (message_id, ball_name, is_test, expires_at, channel_id)
    VALUES (?, ?, ?, ?, ?)`, [message.id, ballName, isTest ? 1 : 0, expiresAt, message.channelId]);
  if (!isTest) scheduleExpiry(message.id, message.channelId, expiresAt);
}

client.on('messageCreate', async message => {
  if (message.author.bot || !message.guild) return;
  const channelId = spawnChannelByGuild[message.guild.id];
  if (!channelId || autoSpawnInProgress) return;
  autoSpawnInProgress = true;
  let spawnMessage;
  try {
    const active = await query('SELECT message_id FROM active_spawns WHERE is_test = 0 AND expires_at > ? LIMIT 1', [Date.now()]);
    if (active.rows.length) return;
    messagesUntilSpawn--;
    console.log(`[MeowlDex] Messages until spawn: ${messagesUntilSpawn}`);
    if (messagesUntilSpawn > 0) return;
    const ballName = pickWeightedBall();
    const channel = await client.channels.fetch(channelId);
    if (!channel?.isTextBased()) throw new Error('Spawn channel is unavailable.');
    // Enable Catch only after the record has been saved.
    spawnMessage = await channel.send({ content: 'A wild country ball appeared!',
      files: [customArt[ballName] || `https://flagcdn.com/w320/${flagCodes[ballName]}.png`],
      components: [catchRow(true, 'Preparing…')] });
    await saveSpawn(spawnMessage, ballName, false);
    await spawnMessage.edit({ components: [catchRow()] });
    messagesUntilSpawn = Math.floor(Math.random() * 20) + 10;
  } catch (error) {
    console.error('AUTO SPAWN ERROR:', error);
    messagesUntilSpawn = Math.floor(Math.random() * 20) + 10;
    if (spawnMessage) {
      await query('DELETE FROM active_spawns WHERE message_id = ?', [spawnMessage.id]).catch(() => {});
      clearExpiry(spawnMessage.id);
      await spawnMessage.delete().catch(() => {});
    }
  } finally {
    autoSpawnInProgress = false;
  }
});

client.on('messageDelete', message => {
  clearExpiry(message.id);
  query('DELETE FROM active_spawns WHERE message_id = ?', [message.id])
    .catch(error => console.error('SPAWN CLEANUP ERROR:', error));
});

async function sendLongReply(interaction, content) {
  const chunks = [];
  let chunk = '';
  for (const line of content.split('\n')) {
    if ((chunk + line + '\n').length > 1900) { chunks.push(chunk); chunk = ''; }
    chunk += line + '\n';
  }
  if (chunk) chunks.push(chunk);
  await interaction.editReply({ content: chunks.shift(), allowedMentions: { parse: [] } });
  for (const text of chunks) await interaction.followUp({ content: text, allowedMentions: { parse: [] } });
}

async function handleInteraction(interaction) {
  if (interaction.isAutocomplete()) {
    const focused = interaction.options.getFocused(true);
    let names = [];
    if (interaction.commandName === 'ballgive' && focused.name === 'ball') {
      const owned = await query('SELECT ball_name FROM collections WHERE user_id = ? AND quantity > 0 ORDER BY ball_name', [interaction.user.id]);
      names = owned.rows.map(row => row[0].value);
    } else if (interaction.commandName === 'previewball' && focused.name === 'countryball') {
      names = Object.keys(balls);
    }
    return interaction.respond(suggestions(names, focused.value));
  }

  if (interaction.isButton() && interaction.customId === 'catch_ball') {
    // Opening the modal needs no network lookup, so slow database reads cannot time it out.
    // The saved spawn and answer are checked when the modal is submitted.
    const input = new TextInputBuilder().setCustomId('ball_guess').setLabel('Which ball is this?')
      .setStyle(TextInputStyle.Short).setRequired(true);
    const modal = new ModalBuilder().setCustomId(`guess_ball_${interaction.message.id}`)
      .setTitle('Catch the ball!').addComponents(new ActionRowBuilder().addComponents(input));
    return interaction.showModal(modal);
  }

  if (interaction.isModalSubmit() && interaction.customId.startsWith('guess_ball_')) {
    await interaction.deferReply();
    const messageId = interaction.customId.slice('guess_ball_'.length);
    const spawn = await loadSavedSpawn(messageId);
    if (!spawn) return interaction.editReply('This spawn has expired or is no longer available. Try the next ball!');
    const guess = interaction.fields.getTextInputValue('ball_guess');
    if (!resolveBall(guess, [spawn.ballName])) {
      return interaction.editReply({ content: `${interaction.user} guessed the wrong ball!`, allowedMentions: { parse: [] } });
    }
    const claimed = await claimSavedSpawn(messageId, interaction.user.id, spawn.ballName);
    if (!claimed) return interaction.editReply('This spawn was caught or expired before your answer could be saved.');
    clearExpiry(messageId);
    await interaction.editReply({
      content: `${interaction.user} caught **${claimed.ballName}**!` +
        (claimed.isTest ? '\nTest spawn — not added to your collection.' : ''),
      allowedMentions: { parse: [] }
    });
    // A Discord message-edit failure must not undo or repeat a successful award.
    try {
      const original = interaction.message || await interaction.channel.messages.fetch(messageId);
      await original.edit({ components: [catchRow(true, 'Caught!')] });
    } catch (error) { console.error('Could not disable caught button:', error.message); }
    return;
  }

  if (!interaction.isChatInputCommand()) return;
  const command = interaction.commandName;
  if (command === 'ballgive') {
    const recipient = interaction.options.getUser('user', true);
    if (recipient.id === interaction.user.id || recipient.bot) {
      return interaction.reply({ content: recipient.bot ? "You can't give balls to bots!" : "You can't give a ball to yourself!", ephemeral: true });
    }
    await interaction.deferReply({ ephemeral: true });
    const owned = await query('SELECT ball_name FROM collections WHERE user_id = ? AND quantity > 0', [interaction.user.id]);
    const ballName = resolveBall(interaction.options.getString('ball', true), owned.rows.map(row => row[0].value));
    if (!ballName) return interaction.editReply("You don't own that ball. Choose one from the suggestions!");
    if (!await transferBall(interaction.user.id, recipient.id, ballName)) return interaction.editReply("You don't own that ball anymore!");
    return interaction.editReply({
  content: `<@${interaction.user.id}> gave **${ballName}** to <@${recipient.id}>!`,
  allowedMentions: { parse: [] }
});
  }

  if (command === 'compare') {
    const other = interaction.options.getUser('user', true);
    if (other.id === interaction.user.id) return interaction.reply({ content: 'Choose someone else to compare with!', ephemeral: true });
    await interaction.deferReply();
    const result = await query('SELECT user_id, ball_name, quantity FROM collections WHERE user_id IN (?, ?) AND quantity > 0 ORDER BY ball_name', [interaction.user.id, other.id]);
    const yours = new Map(), theirs = new Map();
    for (const row of result.rows) (row[0].value === interaction.user.id ? yours : theirs).set(row[1].value, Number(row[2].value));
    const shared = [...yours.keys()].filter(name => theirs.has(name));
    const onlyYours = [...yours.keys()].filter(name => !theirs.has(name));
    const onlyTheirs = [...theirs.keys()].filter(name => !yours.has(name));
    const total = map => [...map.values()].reduce((sum, n) => sum + n, 0);
    const list = names => names.length ? names.map(name => `• ${name}`).join('\n') : 'None yet.';
    return sendLongReply(interaction, `📚 **MeowlDex Collection Comparison**\n\n` +
      `<@${interaction.user.id}>: **${yours.size} unique** • **${total(yours)} total balls**\n` +
      `<@${other.id}>: **${theirs.size} unique** • **${total(theirs)} total balls**\n\n` +
      `🤝 **Both own (${shared.length})**\n${list(shared)}\n\n` +
      `📦 **Only you own (${onlyYours.length})**\n${list(onlyYours)}\n\n` +
      `🔎 **Only they own (${onlyTheirs.length})**\n${list(onlyTheirs)}`);
  }

  if (command === 'collection') {
    await interaction.deferReply();
    const result = await query('SELECT ball_name, quantity FROM collections WHERE user_id = ? AND quantity > 0 ORDER BY ball_name', [interaction.user.id]);
    const list = result.rows.map(row => Number(row[1].value) > 1 ? `${row[0].value} ×${row[1].value}` : row[0].value);
    return sendLongReply(interaction, `📚 **${interaction.user.username}'s MeowlDex Collection**\n\n` +
      (list.join('\n') || "You haven't caught any balls yet!"));
  }

  if (command === 'previewball') {
    const name = resolveBall(interaction.options.getString('countryball', true));
    if (!name || !customArt[name]) return interaction.reply("This country ball doesn't have an art yet!");
    await interaction.deferReply();
    return interaction.editReply({ content: `This is the present art of ${name}`, files: [customArt[name]] });
  }

  if (command === 'spawn') {
    await interaction.deferReply();
    let message;
    try {
      message = await interaction.editReply({ content: 'A wild country ball appeared!', files: [customArt.Turkey], components: [catchRow(true, 'Preparing…')] });
      await saveSpawn(message, 'Turkey', true);
      await message.edit({ components: [catchRow()] });
    } catch (error) {
      if (message) await query('DELETE FROM active_spawns WHERE message_id = ?', [message.id]).catch(() => {});
      await interaction.editReply({ content: 'Could not prepare the test spawn. Please try again.', components: [] }).catch(() => {});
      throw error;
    }
    return;
  }

  if (command === 'craft') {
    await interaction.deferReply();
    const recipe = craftRecipes[interaction.options.getString('recipe', true)];
    if (!recipe) return interaction.editReply('Choose a valid recipe.');
    if (!await craftBall(interaction.user.id, recipe)) {
      return interaction.editReply(`🛠️ You need **${recipe.ingredients.join(' + ')}** to craft **${recipe.result}**!`);
    }
    return interaction.editReply(`🛠️ **CRAFT SUCCESSFUL!**\n\n${recipe.ingredients.join(' + ')} → **${recipe.result}** ✨`);
  }

  if (command === 'rarity') {
    return interaction.reply('🌟 **MeowlDex Rarities** 🌟\n\n' +
      '⚪ **Common**\n🟢 **Uncommon**\n🔵 **Rare**\n🟣 **Legendary**\n🔴 **Mythic**\n💪 **Superpower**\n🏺 **Ancient**\n\n' +
      '**Ancient Balls:**\n• Xiongnu\n• Göktürk Khaganate\n• Ancient Egypt\n• Babylon\n• Hittite Empire\n• Assyrian Empire\n• Ancient Greece');
  }
}

client.on('interactionCreate', interaction => {
  handleInteraction(interaction).catch(async error => {
    console.error('INTERACTION ERROR:', error);
    try {
      if (interaction.isAutocomplete()) {
        if (!interaction.responded) await interaction.respond([]);
      } else {
        const content = 'Something went wrong. If you were catching, giving, or crafting a ball, check your collection before trying again.';
        if (interaction.deferred) await interaction.editReply({ content });
        else if (!interaction.replied) await interaction.reply({ content, ephemeral: true });
      }
    } catch (replyError) { console.error('Could not send error reply:', replyError.message); }
  });
});

const commands = [
  new SlashCommandBuilder()
    .setName("ballgive")
    .setDescription("Give a ball from your collection to someone")
    .addUserOption(option =>
      option
        .setName("user")
        .setDescription("Who receives the ball")
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName("ball")
        .setDescription("The name of the ball to give")
        .setRequired(true)
        .setAutocomplete(true)
    ),
  
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
    .setDescription("Spawns a test MeowlDex ball"),

 new SlashCommandBuilder()
  .setName("craft")
  .setDescription("Craft special MeowlDex balls")
  .addStringOption(option =>
    option
      .setName("recipe")
      .setDescription("Choose what you want to craft")
      .setRequired(true)
     .addChoices(
  {
    name: "Desert Rivals",
    value: "desert rivals"
  },
  {
    name: "European Union",
    value: "european union"
  },
  {
    name: "Soviet Union",
    value: "soviet union"
  }
)
  ),

 new SlashCommandBuilder()
  .setName("previewball")
  .setDescription("Preview the current art of a countryball")
  .addStringOption(option =>
    option
      .setName("countryball")
      .setDescription("The countryball you want to preview")
      .setRequired(true)
      .setAutocomplete(true)
  )
].map(command => command.toJSON());


async function start() {
  for (const key of ['DISCORD_TOKEN', 'TURSO_DATABASE_URL', 'TURSO_AUTH_TOKEN']) {
    if (!process.env[key]) throw new Error(`Missing environment variable: ${key}`);
  }
  await setupTursoDatabase();
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
 const guilds = [
  '1527806660129591497',
  '1538863607474028554'
];

for (const guildId of guilds) {
  await rest.put(
    Routes.applicationGuildCommands(
      '1546632087430373416',
      guildId
    ),
    { body: commands }
  );
}
  console.log('Commands registered successfully!');
  client.once('ready', () => {
    console.log(`MeowlDex is ready as ${client.user.tag}`);
    restoreSpawnTimers().catch(error => console.error('SPAWN RESTORE ERROR:', error));
  });
  await client.login(process.env.DISCORD_TOKEN);
}

if (require.main === module) {
  start().catch(error => {
    console.error('STARTUP ERROR:', error);
    process.exitCode = 1;
    client.destroy();
  });
}
