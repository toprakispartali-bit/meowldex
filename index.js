const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle
} = require("discord.js");


const balls = {
  "Turkiye": "Legendary",
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


"Vatican City": "Mythic",
"France": "Legendary",
"United Kingdom": "Legendary",
"England": "Legendary",
"Poland": "Legendary",
"Italy": "Legendary",
"Norway": "Legendary",
"Spain": "Legendary",
"Switzerland": "Legendary",

"Romania": "Legendary",
"Bulgaria": "Rare",
"Austria": "Rare",
"Hungary": "Rare",
"Belgium": "Rare",
"Netherlands": "Rare",
"Luxembourg": "Legendary",
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

"Pakistan": "Mythic",
"Japan": "Legendary",
"South Korea": "Legendary",
"Afghanistan": "Legendary",
"Kazakhstan": "Legendary",
"Indonesia": "Legendary",
"Vietnam": "Legendary",
"Singapore": "Mythic",
"Turkmenistan": "Rare",
"Uzbekistan": "Rare",
"Thailand": "Rare",
"Azerbaijan": "Legendary",
"Georgia": "Legendary",
"Kyrgyzstan": "Rare",
"Mongolia": "Rare",
"Philippines": "Rare",
"Bangladesh": "Rare",
"Bhutan": "Rare",
"Armenia": "Legendary",
"Myanmar": "Uncommon",
"Sri Lanka": "Uncommon",
"North Korea": "Mythic",
"Kingdom of Iceland": "Rare",
"United States of the Ionian Islands": "Common",
"Republic of Ragusa": "Common",
"Free State of Fiume": "Common",
"Saar Protectorate": "Common",
"Kingdom of Württemberg": "Common",
"Kingdom of Hanover": "Common",
"Kingdom of Bavaria": "Common",
"Duchy of Parma": "Common",
"Duchy of Modena and Reggio": "Common",
"Grand Duchy of Tuscany": "Common",
"Republic of Cospaia": "Common",
"Helvetic Republic": "Common",
"Batavian Republic": "Common",
"Kingdom of Etruria": "Common",
"Kingdom of Sardinia": "Uncommon",
"Republic of Texas": "Legendary",
"Orange Free State": "Uncommon",
"Transvaal Republic": "Uncommon",
"Kingdom of Saxony": "Uncommon",
"Kingdom of Naples": "Uncommon",
"Kingdom of Sicily": "Uncommon",
"Grand Duchy of Finland": "Rare",
"Kingdom of Croatia-Slavonia": "Uncommon",
"Cretan State": "Uncommon",
"Kingdom of Hejaz": "Uncommon",
"Mutawakkilite Kingdom of Yemen": "Rare",
"Federation of South Arabia": "Legendary",
"Kingdom of the Two Sicilies": "Rare",
"Austrian Empire": "Legendary",
"Polish-Lithuanian Commonwealth": "Superpower",
"First Mexican Empire": "Legendary",
"Empire of Brazil": "Legendary",
"Kingdom of Romania": "Rare",
"Kingdom of Greece": "Legendary",
"Kingdom of Bulgaria": "Rare",
"Kingdom of Serbia": "Rare",
"Kingdom of Albania": "Rare",
"Kingdom of Egypt": "Rare",
"Kingdom of Libya": "Rare",
"United Arab Republic": "Legendary",
"Republic of China": "Legendary",
"Russian Empire": "Superpower",
"Mughal Empire": "Legendary",
"First French Empire": "Superpower",
"Safavid Empire": "Legendary",
"Timurid Empire": "Legendary",
"Maurya Empire": "Legendary",
"Maratha Empire": "Legendary",
"Empire of Japan": "Superpower",

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

"Greenland": "Mythic",
"Czechoslovakia": "Mythic",
"Yugoslavia": "Mythic",
"East Germany": "Mythic",
"West Germany": "Mythic",
"Prussia": "Mythic",
"Kingdom of Hawaii": "Mythic",
"Gran Colombia": "Mythic",
"Republic of Venice": "Mythic",
"Kingdom of Jerusalem": "Mythic",
"Tibet": "Mythic",
"Knights Hospitaller": "Mythic",
"Pirate Republic": "Mythic",
"Free City of Danzig": "Mythic",
"Neutral Moresnet": "Mythic",
"Sealand": "Mythic",
"Verdis": "Mythic",
"Liberland": "Mythic",
"Molossia": "Mythic",

"Byzantine Empire": "Superpower",
"Holy Roman Empire": "Superpower",

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
"Antarctica": "Mythic",
"Almohad Caliphate": "Superpower",
"Dacian Kingdom": "Mythic",
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
"Umayyad Caliphate": "Ancient",
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
  "Turkiye": "tr",
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
  "Turkiye": "./turkiye.png",
  "Saudi Arabia": "./saudi-arabia.png",
  "Algeria": "./algeria.png",
  "Morocco": "./morocco.png",
  "Soviet Union": "./soviet-union.png",
  "Desert Rivals": "./desert-rivals.png",
  "Libya": "./libya.png",
  "Nazi Germany": "./nazi-germany.png",
  "Tajikistan": "./tajikistan.png",
  "Djibouti": "./djibouti.png",
  "England": "./england.png",
  "Georgia": "./georgia.png",
  "France": "./france.png",
  "North Korea": "./north-korea.png"
};

const ballAliases = {
  "Democratic Republic of the Congo": [
    "DR Congo",
    "Democratic Republic of Congo"
  ],

  "United States of America": [
    "United States",
    "America",
    "USA"
  ],

  "United Kingdom": [
    "Britain",
    "Great Britain",
    "UK"
  ],

  "Turkiye": [
    "Turkey",
    "Türkiye"
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
    "East Timor",
    "Timor Leste"
  ],

   "Republic of the Congo": [
    "Congo"
  ],

  "Bosnia and Herzegovina": [
    "Bosnia"
  ]
};

const rarityOrder = [
  "Ancient Egypt",                    // #1
  "Xiongnu",                          // #2
  "Sumer",                            // #3
  "Babylon",                          // #4
  "Göktürk Khaganate",                // #5
  "Umayyad Caliphate",                // #6
  "Assyrian Empire",                  // #7
  "Hittite Empire",                   // #8
  "Ancient Greece",                   // #9
  "Minoan Civilization",              // #10
  "Mycenaean Greece",                 // #11
  "Alaouite Dynasty",                 // #12
  "Maya Civilization",                // #13
  "Aztec Empire",                     // #14
  "Inca Empire",                      // #15
  "Carthage",                         // #16

  "Roman Empire",                     // #17
  "Mongol Empire",                    // #18
  "Ottoman Empire",                   // #19
  "British Empire",                   // #20
  "Soviet Union",                     // #21
  "Achaemenid Empire",                // #22
  "Byzantine Empire",                 // #23
  "Holy Roman Empire",                // #24
  "Han Dynasty",                      // #25
  "Qing Dynasty",                     // #26
  "Russian Empire",                   // #27
  "Spanish Empire",                   // #28
  "Portuguese Empire",                // #29
  "Seljuk Empire",                    // #30
  "First French Empire",              // #31
  "Napoleonic France",                // #32
  "German Empire",                    // #33
  "Austria-Hungary",                  // #34
  "Polish-Lithuanian Commonwealth",   // #35
  "Empire of Japan",                  // #36
  "Nazi Germany",                     // #37
  "Almohad Caliphate",                // #38
  "United States of America",         // #39
  "Russia",                           // #40
  "China",                            // #41
  "India",                            // #42
  "Vatican City",              // #43
  "Prussia",                   // #44
  "Kingdom of Jerusalem",      // #45
  "Knights Hospitaller",       // #46
  "Republic of Venice",        // #47
  "Czechoslovakia",            // #48
  "Yugoslavia",                // #49
  "East Germany",              // #50
  "West Germany",              // #51
  "Gran Colombia",             // #52
  "Tibet",                     // #53
  "Kingdom of Hawaii",         // #54
  "Greenland",                 // #55
  "Antarctica",                // #56
  "Dacian Kingdom",            // #57
  "Pakistan",                  // #58
  "Singapore",                 // #59
  "North Korea",               // #60
  "Pirate Republic",           // #61
  "Free City of Danzig",       // #62
  "Neutral Moresnet",          // #63
  "Sealand",                   // #64
  "Liberland",                 // #65
  "Verdis",                    // #66
  "Molossia",                  // #67
  "Safavid Empire",            // #68
    "Mughal Empire",                  // #69
  "Austrian Empire",                  // #70
  "Timurid Empire",                   // #71
  "Maurya Empire",                    // #72
  "Republic of China",                // #73
  "Maratha Empire",                   // #74
  "Turkiye",                          // #75
  "Japan",                            // #76
  "France",                           // #77
  "United Kingdom",                   // #78
  "First Mexican Empire",             // #79
  "Kingdom of Greece",                // #80
  "United Arab Republic",             // #81
  "Republic of Texas",                // #82
  "Italy",                            // #83
  "Spain",                            // #84
  "Brazil",                           // #85
  "Egypt",                            // #86
  "Saudi Arabia",                     // #87
  "Morocco",                          // #88
  "Poland",                           // #89
  "Empire of Brazil",                 // #90
  "Nigeria",                          // #91
  "Mexico",                           // #92
  "Federation of South Arabia",       // #93
  "Indonesia",                        // #94
  "Australia",                        // #95
  "Canada",                           // #96
  "Iran",                             // #97
  "Algeria",                          // #98
  "Argentina",                        // #99
  "England",                          // #100
  "Vietnam",                          // #101
  "Kazakhstan",                       // #102
  "South Korea",                          // #103
  "Switzerland",                      // #104
  "Norway",                           // #105
  "United Arab Emirates",             // #106
  "Palestine",                        // #107
  "Afghanistan",                      // #108
  "Colombia",                         // #109
  "Georgia",                          // #110
  "Armenia",                          // #111
  "Azerbaijan",                       // #112
  "Romania",                       // #113
 "Luxembourg",                       // #114
  "Kingdom of the Two Sicilies",            // #115
  "Grand Duchy of Finland",                  // #116
  "Kingdom of Egypt",                        // #117
  "Mutawakkilite Kingdom of Yemen",          // #118
  "Kingdom of Romania",                      // #119
  "Germany",                                 // #120
  "Kingdom of Serbia",                       // #121
  "South Africa",                            // #122
  "Kingdom of Bulgaria",                     // #123
  "Kingdom of Libya",                        // #124
  "Ukraine",                                 // #125
  "Kingdom of Albania",                      // #126
  "Sweden",                                  // #127
  "Portugal",                                // #128
  "Netherlands",                             // #129
  "Belgium",                                 // #130
  "Kingdom of Iceland",                      // #131
  "Austria",                                 // #132
  "Hungary",                                 // #133
  "Bulgaria",                                // #134
  "Denmark",                                 // #135
  "Finland",                                 // #136
  "Iceland",                                 // #137
  "Scotland",                                // #138
  "Wales",                                   // #139
  "Tunisia",                                 // #140
  "Cape Verde",                              // #141
  "Iraq",                                    // #142
  "Syria",                                   // #143
  "Yemen",                                   // #144
  "Thailand",                                // #145
  "Uzbekistan",                              // #146
  "Turkmenistan",                            // #147
  "Mongolia",                                // #148
  "Philippines",                             // #149
  "Bangladesh",                              // #150
  "Kyrgyzstan",                              // #151
  "Bhutan",                                  // #152
  "Venezuela",                               // #153
  "Peru",                                    // #154
  "Uruguay",                                 // #155
  "Paraguay",                                // #156
  "Ecuador",                                 // #157
  "New Zealand",                             // #158
  "Central African Republic",                // #159
    "Serbia",                           // #160
  "Bosnia and Herzegovina",           // #161
  "Czechia",                          // #162
  "Kingdom of Hejaz",                 // #163
  "Democratic Republic of the Congo", // #164
  "Libya",                            // #165
  "Niger",                            // #166
  "Namibia",                          // #167
  "Myanmar",                          // #168
  "Kingdom of Saxony",                // #169
  "Qatar",                            // #170
  "Jamaica",                          // #171
  "Panama",                           // #172
  "El Salvador",                      // #173
  "Papua New Guinea",                 // #174
  "Kingdom of Sardinia",              // #175
  "Transvaal Republic",               // #176
  "Orange Free State",                // #177
  "Sri Lanka",                        // #178
  "Kingdom of Naples",                // #179
  "Kingdom of Sicily",                // #180
  "Kingdom of Croatia-Slavonia",      // #181
  "Cretan State",                     // #182
  "Northern Ireland",                 // #183
    "Kingdom of Bavaria",                    // #184
  "Grand Duchy of Tuscany",                // #185
  "Republic of Ragusa",                    // #186
  "Kingdom of Hanover",                    // #187
  "Helvetic Republic",                     // #188
  "Taiwan",                                // #189
  "Batavian Republic",                     // #190
  "Kingdom of Württemberg",                // #191
  "Republic of Cospaia",                   // #192
  "Kingdom of Etruria",                    // #193
  "Duchy of Parma",                        // #194
  "Free State of Fiume",                   // #195
  "United States of the Ionian Islands",   // #196
  "Duchy of Modena and Reggio",            // #197
  "Saar Protectorate",                     // #198
  "Monaco",                                // #199
  "Liechtenstein",                         // #200
  "San Marino",                            // #201
  "Andorra",                               // #202
  "Malta",                                 // #203
  "Ethiopia",                              // #204
  "Kenya",                                 // #205
  "Ghana",                                 // #206
  "Cuba",                                  // #207
  "Croatia",                               // #208
  "Ireland",                               // #209
  "Malaysia",                              // #210
  "Nepal",                                 // #211
  "Belarus",                               // #212
  "Cyprus",                                // #213
  "Kosovo",                                // #214
  "Albania",                               // #215
  "Jordan",                                // #216
  "Lebanon",                               // #217
  "Kuwait",                                // #218
  "Oman",                                  // #219
  "Bahrain",                               // #220
  "Lithuania",                             // #221
  "Estonia",                               // #222
  "Latvia",                                // #223
  "Slovakia",                              // #224
  "Slovenia",                              // #225
  "Moldova",                               // #226
  "Montenegro",                            // #227
  "North Macedonia",                       // #228
  "Botswana",                              // #229
  "Senegal",                               // #230
  "Cameroon",                              // #231
  "Angola",                                // #232
  "Madagascar",                            // #233
  "Mauritius",                             // #234
  "Seychelles",                            // #235
  "Gabon",                                 // #236
  "Rwanda",                                // #237
  "Zimbabwe",                              // #238
  "Zambia",                                // #239
  "Tanzania",                              // #240
  "Uganda",                                // #241
  "Mozambique",                            // #242
  "Burkina Faso",                          // #243
  "Mali",                                  // #244
  "Mauritania",                            // #245
  "Sudan",                                 // #246
  "South Sudan",                           // #247
  "Somalia",                               // #248
  "Chad",                                  // #249
  "Guinea",                                // #250
  "Liberia",                               // #251
  "Sierra Leone",                          // #252
  "Gambia",                                // #253
  "Burundi",                               // #254
  "Republic of the Congo",                 // #255
  "Eritrea",                               // #256
  "Djibouti",                              // #257
  "Eswatini",                              // #258
  "Equatorial Guinea",                     // #259
  "Guinea-Bissau",                         // #260
  "Malawi",                                // #261
  "Lesotho",                               // #262
  "Comoros",                               // #263
  "São Tomé and Príncipe",                 // #264
  "Togo",                                  // #265
  "Brunei",                                // #266
  "Cambodia",                              // #267
  "Laos",                                  // #268
  "Tajikistan",                            // #269
  "Timor-Leste",                           // #270
  "Costa Rica",                            // #271
  "Dominican Republic",                    // #272
  "Guatemala",                             // #273
  "Trinidad and Tobago",                   // #274
  "Bahamas",                               // #275
  "Barbados",                              // #276
  "Belize",                                // #277
  "Haiti",                                 // #278
  "Honduras",                              // #279
  "Nicaragua",                             // #280
  "Antigua and Barbuda",                   // #281
  "Dominica",                              // #282
  "Grenada",                               // #283
  "Saint Lucia",                           // #284
  "Saint Vincent and the Grenadines",      // #285
  "Saint Kitts and Nevis",                 // #286
  "Bolivia",                               // #287
  "Guyana",                                // #288
  "Suriname",                              // #289
  "Fiji",                                  // #290
  "Samoa",                                 // #291
  "Tonga",                                 // #292
  "Solomon Islands",                       // #293
  "Vanuatu",                               // #294
  "Palau",                                 // #295
  "Marshall Islands",                      // #296
  "Micronesia",                            // #297
  "Kiribati",                              // #298
  "Nauru",                                 // #299
  "Tuvalu"                                 // #300
];

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
  "1527806660129591497": "1527808233366880277",
  "1542507974801621012": "1548091622548570264"
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

if (!info.rows.some(row => row[1].value === 'trait')) {
  await query("ALTER TABLE active_spawns ADD COLUMN trait TEXT NOT NULL DEFAULT ''");
}

await query(`CREATE TABLE IF NOT EXISTS collection_variants (
  user_id TEXT NOT NULL,
  ball_name TEXT NOT NULL,
  trait TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (user_id, ball_name, trait)
)`);
  
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
  const result = await query(`SELECT ball_name, is_test, expires_at, channel_id, trait
    FROM active_spawns WHERE message_id = ?`, [messageId]);
  const row = result.rows[0];
  if (!row || (Number(row[2].value) !== 0 && Number(row[2].value) <= Date.now())) return null;
  return {
  ballName: row[0].value,
  isTest: Number(row[1].value) === 1,
  expiresAt: Number(row[2].value),
  channelId: row[3].value,
  trait: row[4].value
};
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

    statement(`INSERT INTO collection_variants (user_id, ball_name, trait, quantity)
      SELECT ?, ball_name, trait, 1 FROM active_spawns
      WHERE message_id = ? AND ball_name = ? AND is_test = 0
        AND trait != '' AND (expires_at = 0 OR expires_at > ?)
      ON CONFLICT(user_id, ball_name, trait)
      DO UPDATE SET quantity = collection_variants.quantity + 1`,
[userId, messageId, ballName, now]),
    
    statement(`DELETE FROM active_spawns WHERE message_id = ? AND ball_name = ?
      AND (expires_at = 0 OR expires_at > ?) RETURNING ball_name, is_test, trait`,
    [messageId, ballName, now])
  ]);
  const row = results[2].rows[0];
  return row ? {
  ballName: row[0].value,
  isTest: Number(row[1].value) === 1,
  trait: row[2].value
} : null;
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
    const message = await channel.messages.fetch(messageId);

    await message.edit({
      components: [catchRow(true, 'Expired')]
    });
  } catch (error) {
    console.error('Could not mark expired spawn:', error.message);
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

async function saveSpawn(message, ballName, isTest, trait = '') {
  const expiresAt = isTest ? 0 : Date.now() + SPAWN_LIFETIME;
 await query(`INSERT INTO active_spawns (message_id, ball_name, is_test, expires_at, channel_id, trait)
    VALUES (?, ?, ?, ?, ?, ?)`,
  [message.id, ballName, isTest ? 1 : 0, expiresAt, message.channelId, trait]);
  if (!isTest) scheduleExpiry(message.id, message.channelId, expiresAt);
}

client.on('messageCreate', async message => {
  if (message.author.bot || !message.guild) return;
  const configuredChannelId = spawnChannelByGuild[message.guild.id];

const channelId =
  message.guild.id === "1549135179245686854"
    ? message.channel.id
    : configuredChannelId;

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
    const trait = Math.random() < 0.10 ? 'Halloween' : '';
    const channel = await client.channels.fetch(channelId);
    if (!channel?.isTextBased()) throw new Error('Spawn channel is unavailable.');
    // Enable Catch only after the record has been saved.
    spawnMessage = await channel.send({ content: 'A wild country ball appeared!',
      files: [customArt[ballName] || `https://flagcdn.com/w320/${flagCodes[ballName]}.png`],
      components: [catchRow(true, 'Preparing…')] });
    await saveSpawn(spawnMessage, ballName, false, trait);
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

const ballEmojis = {
  "Turkiye": "<:turkiye:1550965053564387338>",
  "Jamaica": "<:jamaica:1549456606293655696>",
  "Tunisia": "<:tunisia:1549460632666116151>",
  "Botswana": "<:botswana:1549462864660529292>",
  "Bosnia and Herzegovina": "<:bosniaandherzegovina:1549463847369187388>",
  "Niger": "<:niger:1549474580853297262>",
  "United States of America": "<:unitedstatesofamerica:1549482690284101802>",
  "Northern Ireland": "<:northernireland:1550599314278055967>",
  "Bulgaria": "<:bulgaria:1549807095514406972>",
  "Panama": "<:panama:1549832562715791440>",
  "Gabon": "<:gabon:1549833512369127424>",
  "Latvia": "<:latvia:1550165513865527306>",
  "Spain": "<:spain:1550168346320707726>",
  "Mauritania": "<:mauritania:1550169686048641034>",
  "Mali": "<:mali:1550171402869669928>",
  "Tanzania": "<:tanzania:1550173107132698736>",
  "Saint Kitts and Nevis": "<:saintkittsandnevis:1550175688370290778>",
  "Colombia": "<:colombia:1550179024989462529>",
  "Qatar": "<:qatar:1550204404563714228>",
  "Timor-Leste": "<:timorleste:1550543965558669433>",
  "Chile": "<:chile:1550592199110955019>",
  "Myanmar": "<:myanmar:1550593146935840849>",
  "Estonia": "<:estonia:1550593809258385408>",
  "Haiti": "<:haiti:1550594746299195522>",
  "Georgia": "<:georgia:1550596100627628102>",
  "Nigeria": "<:nigeria:1550598412834185337>",
  "England": "<:england:1550602358235340830>",
  "Morocco": "<:morocco:1550607552297836634>",
  "United Kingdom": "<:unitedkingdom:1550969411202977882>"
};

async function handleInteraction(interaction) {
 if (interaction.isAutocomplete()) {
  const focused = interaction.options.getFocused(true);

  if (interaction.commandName === 'ballgive' && focused.name === 'balls') {
    const owned = await query(
      'SELECT ball_name, quantity FROM collections WHERE user_id = ? AND quantity > 0 ORDER BY ball_name',
      [interaction.user.id]
    );

    // Makes duplicates available too:
    // England x2 -> England, England
    const ownedNames = owned.rows.flatMap(row =>
      Array(Number(row[1].value)).fill(row[0].value)
    );

    const fullInput = focused.value;
    const parts = fullInput.split(',');

    // Everything before the ball currently being typed
    const prefix = parts.slice(0, -1)
      .map(x => x.trim())
      .filter(Boolean);

    const current = parts[parts.length - 1].trim().toLowerCase();

    const matches = ownedNames
      .filter(name => name.toLowerCase().includes(current))
      .slice(0, 25);

    return interaction.respond(
      matches.map(name => {
        const value = [...prefix, name].join(', ');

        return {
          name,
          value
        };
      })
    );

if (
  interaction.commandName === 'collection' &&
  focused.name === 'ball'
) {
  return interaction.respond(
    suggestions(Object.keys(balls), focused.value)
  );
}
    
  }

  if (
    interaction.commandName === 'previewball' &&
    focused.name === 'countryball'
  ) {
    return interaction.respond(
      suggestions(Object.keys(balls), focused.value)
    );
  }

  return interaction.respond([]);
}

  // PASTE THE NEW BALLGIVE SELECT-MENU BLOCK HERE

  // THEN your old code continues normally
if (interaction.isButton() && interaction.customId.startsWith('rarities_')) {
  const rarities = [
    "Common",
    "Uncommon",
    "Rare",
    "Legendary",
    "Mythic",
    "Superpower",
    "Ancient"
  ];

  const parts = interaction.customId.split('_');
  const direction = parts[1];
  const currentPage = Number(parts[2]);

  const newPage = direction === 'next'
    ? currentPage + 1
    : currentPage - 1;

  const rarity = rarities[newPage];

  const emojis = Object.keys(balls)
    .filter(name => balls[name] === rarity && ballEmojis[name])
    .map(name => ballEmojis[name]);

  const lines = [];

  for (let i = 0; i < emojis.length; i += 20) {
    lines.push(emojis.slice(i, i + 20).join(' '));
  }

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`rarities_prev_${newPage}`)
      .setLabel('⬅️')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(newPage === 0),

    new ButtonBuilder()
      .setCustomId(`rarities_next_${newPage}`)
      .setLabel('➡️')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(newPage === rarities.length - 1)
  );

  return interaction.update({
    content:
      `**${rarity} Balls**\n\n` +
      (lines.join('\n') || `No ${rarity} ball emojis added yet.`) +
      `\n\n\n**Page ${newPage + 1}/${rarities.length} — ${rarity}**`,
    components: [row]
  });
}

if (interaction.isButton() && interaction.customId.startsWith('list_')) {
  const parts = interaction.customId.split('_');
  const direction = parts[1];
  const currentPage = Number(parts[2]);

  const pageSize = 25;
  const totalPages = Math.ceil(rarityOrder.length / pageSize);

  const newPage = direction === 'next'
    ? currentPage + 1
    : currentPage - 1;

  const start = newPage * pageSize;
  const pageBalls = rarityOrder.slice(start, start + pageSize);

  const content = pageBalls
    .map((name, index) => {
      const rank = start + index + 1;
      const emoji = ballEmojis[name] || "";
      return `**#${rank}** ${emoji} ${name}`;
    })
    .join('\n');

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`list_prev_${newPage}`)
      .setLabel('◀')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(newPage === 0),

    new ButtonBuilder()
      .setCustomId(`list_next_${newPage}`)
      .setLabel('▶')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(newPage === totalPages - 1)
  );

  return interaction.update({
    content:
      `**MeowlDex Global Rarity Ranking**\n` +
      `**Page ${newPage + 1}/${totalPages}**\n\n${content}`,
    components: [row]
  });
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
  const wrongMessages = [
    `${interaction.user} guessed the wrong ball!`,
    `${interaction.user} got it wrong! Try again next time.`,
    `Nope, ${interaction.user}!`,
    `${interaction.user} missed it!`,
    `Wrong answer from ${interaction.user}`,
    `Wrong ball, ${interaction.user}!`,
    `Skill issue, ${interaction.user}`,
    `Incorrect guess, ${interaction.user}`
  ];

  const randomWrong =
    wrongMessages[Math.floor(Math.random() * wrongMessages.length)];

  return interaction.editReply({
    content: randomWrong,
    allowedMentions: { parse: [] }
  });
}
    const claimed = await claimSavedSpawn(messageId, interaction.user.id, spawn.ballName);

    if (!claimed) return interaction.editReply('This spawn was caught or expired before your answer could be saved.');
    clearExpiry(messageId);
    const correctMessages = [
  `${interaction.user} caught **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `${interaction.user} successfully caught **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `${interaction.user} got it! It was **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `${interaction.user} guessed correctly! The ball was **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `${interaction.user} secured **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `Nice one, ${interaction.user}! You caught **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `${interaction.user} knew the ball, it was **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `${interaction.user} has good ball knowledge, they caught **${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""}`,
  `**${claimed.ballName}** ${ballEmojis[claimed.ballName] || ""} got caught by ${interaction.user}!`
];
const randomCorrect =
  correctMessages[Math.floor(Math.random() * correctMessages.length)];

await interaction.editReply({
  content:
    randomCorrect +
    (claimed.trait === 'Halloween'
      ? '\n\n*Spooky ball you got there! Happy Halloween! 🎃*'
      : '') +
    (claimed.isTest
      ? '\nTest spawn — not added to your collection.'
      : ''),
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
    return interaction.reply({
      content: recipient.bot
        ? "You can't give balls to bots!"
        : "You can't give balls to yourself!",
      ephemeral: true
    });
  }

  await interaction.deferReply();

  const input = interaction.options.getString('balls', true);

  const requested = input
    .split(',')
    .map(name => name.trim())
    .filter(Boolean);

  if (!requested.length) {
    return interaction.editReply("Enter at least one ball!");
  }

  const owned = await query(
    'SELECT ball_name, quantity FROM collections WHERE user_id = ? AND quantity > 0',
    [interaction.user.id]
  );

  const ownedMap = new Map(
    owned.rows.map(row => [
      row[0].value,
      Number(row[1].value)
    ])
  );

  const resolved = [];

  for (const typedName of requested) {
    const ballName = resolveBall(typedName, [...ownedMap.keys()]);

    if (!ballName) {
      return interaction.editReply(
        `You don't own **${typedName}**! Nothing was given.`
      );
    }

    resolved.push(ballName);
  }

  const needed = new Map();

  for (const ballName of resolved) {
    needed.set(ballName, (needed.get(ballName) || 0) + 1);
  }

  for (const [ballName, amount] of needed) {
    if ((ownedMap.get(ballName) || 0) < amount) {
      return interaction.editReply(
        `You don't have ${amount} copies of **${ballName}**! Nothing was given.`
      );
    }
  }

  for (const ballName of resolved) {
    await transferBall(
      interaction.user.id,
      recipient.id,
      ballName
    );
  }

  const summary = [...needed.entries()]
    .map(([name, amount]) =>
      amount > 1 ? `**${name} ×${amount}**` : `**${name}**`
    )
    .join(', ');

  return interaction.editReply({
    content: `<@${interaction.user.id}> gave ${summary} to <@${recipient.id}>!`,
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
    const list = names => {
  if (!names.length) return 'None yet.';

  const emojis = names
    .map(name => ballEmojis[name])
    .filter(Boolean);

  const lines = [];

  for (let i = 0; i < emojis.length; i += 20) {
    lines.push(emojis.slice(i, i + 20).join(' '));
  }

  return lines.join('\n') || 'None yet.';
};
    return sendLongReply(
  interaction,
  `**MeowlDex Collection Comparison**\n\n` +
  `**Both own:**\n${list(shared)}\n\n` +
  ` **Only <@${interaction.user.id}> has:**\n${list(onlyYours)}\n\n` +
  ` **Only <@${other.id}> has:**\n${list(onlyTheirs)}`
);
  }

if (command === 'inventory') {
  await interaction.deferReply();

  const result = await query(
    'SELECT ball_name, quantity FROM collections WHERE user_id = ? AND quantity > 0 ORDER BY ball_name',
    [interaction.user.id]
  );

  const emojis = result.rows
    .map(row => ballEmojis[row[0].value])
    .filter(Boolean);

  const lines = [];

  for (let i = 0; i < emojis.length; i += 20) {
    lines.push(emojis.slice(i, i + 20).join(' '));
  }

  const list = lines.join('\n');

  return sendLongReply(
    interaction,
    `**${interaction.user}'s MeowlDex Inventory**\n\n` +
    (list || "You haven't caught any balls yet!")
  );
}

if (command === 'collection') {
  await interaction.deferReply();

  const ballName = interaction.options.getString('ball', true);
  const targetUser = interaction.options.getUser('user') || interaction.user;

  if (!Object.keys(balls).includes(ballName)) {
  return interaction.editReply('That ball does not exist.');
}
  const normalResult = await query(
    'SELECT quantity FROM collections WHERE user_id = ? AND ball_name = ?',
    [targetUser.id, ballName]
  );

  const variantResult = await query(
    `SELECT trait, quantity FROM collection_variants
     WHERE user_id = ? AND ball_name = ? AND quantity > 0`,
    [targetUser.id, ballName]
  );

  const total = normalResult.rows.length
    ? Number(normalResult.rows[0][0].value)
    : 0;

  const halloweenRow = variantResult.rows.find(
    row => row[0].value === 'Halloween'
  );

  const halloween = halloweenRow
    ? Number(halloweenRow[1].value)
    : 0;

  const normal = Math.max(0, total - halloween);
  const emoji = ballEmojis[ballName] || '';

  return interaction.editReply(
    `${emoji} **${ballName} Collection — ${targetUser}**\n\n` +
    `Normal: ×${normal}\n` +
    `🎃 Halloween: ×${halloween}\n` +
    `**Total: ${total}**`
  );
}
  
  if (command === 'previewball') {
    const name = resolveBall(interaction.options.getString('countryball', true));
    if (!name || !customArt[name]) {
  const emoji = ballEmojis[name] || '';
  return interaction.reply(
    `**${name}** ${emoji} doesn't have an art yet.`
  );
}
    await interaction.deferReply();
   return interaction.editReply({
  content: `This is the present art of **${name}** ${ballEmojis[name] || ''}`,
  files: [customArt[name]]
});
  }

  if (command === 'spawn') {
    await interaction.deferReply();
    let message;
    try {
      message = await interaction.editReply({ content: 'A wild country ball appeared!', files: [customArt.Turkiye], components: [catchRow(true, 'Preparing…')] });
      const trait = Math.random() < 0.10 ? 'Halloween' : '';
      await saveSpawn(message, 'Turkiye', true, trait);
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

  if (command === 'rarities') {
    const commonEmojis = Object.keys(balls)
  .filter(name => balls[name] === "Common" && ballEmojis[name])
  .map(name => ballEmojis[name]);

const lines = [];

for (let i = 0; i < commonEmojis.length; i += 20) {
  lines.push(commonEmojis.slice(i, i + 20).join(' '));
}

return interaction.reply({
  content:
    `**Common Tier Balls**\n\n` +
    (lines.join('\n') || "No Common ball emojis added yet.") +
    `\n\n\n**Page 1/7 — Common**`,

  components: [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('rarities_prev_0')
        .setLabel('⬅️')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(true),

      new ButtonBuilder()
        .setCustomId('rarities_next_0')
        .setLabel('➡️')
        .setStyle(ButtonStyle.Secondary)
    )
  ]
});
  }

if (interaction.commandName === "list") {
  const pageSize = 25;
  const totalPages = Math.ceil(rarityOrder.length / pageSize);
  const page = 0;

  const start = page * pageSize;
  const pageBalls = rarityOrder.slice(start, start + pageSize);

  const content = pageBalls
    .map((name, index) => {
      const rank = start + index + 1;
      const emoji = ballEmojis[name] || "";
      return `**#${rank}** ${emoji} ${name}`;
    })
    .join("\n");

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`list_prev_${page}`)
      .setLabel("◀")
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(true),

    new ButtonBuilder()
      .setCustomId(`list_next_${page}`)
      .setLabel("▶")
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(totalPages <= 1)
  );

  return interaction.reply({
    content: `**MeowlDex Global Rarity Ranking**\n**Page 1/${totalPages}**\n\n${content}`,
    components: [row]
  });
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
.setDescription("Give balls from your collection to someone")
.addUserOption(option =>
  option
    .setName("user")
    .setDescription("Who receives the balls")
    .setRequired(true)
)
.addStringOption(option =>
  option
    .setName("balls")
    .setDescription("Balls to give, separated by commas")
    .setRequired(true)
    .setAutocomplete(true)
),
  
  new SlashCommandBuilder()
  .setName("rarities")
  .setDescription("Browse all MeowlDex balls by rarity"),

 new SlashCommandBuilder()
  .setName("list")
  .setDescription("View the global MeowlDex rarity ranking"),

  new SlashCommandBuilder()
    .setName("inventory")
    .setDescription("Shows your MeowlDex collection"),

  new SlashCommandBuilder()
  .setName('collection')
  .setDescription("View a user's collection of a specific ball")
  .addStringOption(option =>
    option
      .setName('ball')
      .setDescription('Choose a ball')
      .setRequired(true)
      .setAutocomplete(true))
  .addUserOption(option =>
    option
      .setName('user')
      .setDescription("Whose collection to view")
      .setRequired(false)),

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
];
async function start() {
  for (const key of ['DISCORD_TOKEN', 'TURSO_DATABASE_URL', 'TURSO_AUTH_TOKEN']) {
    if (!process.env[key]) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }

  console.log("STEP 1: starting database");
await setupTursoDatabase();
console.log("STEP 2: database finished");

  const rest = new REST({ version: "10" })
    .setToken(process.env.DISCORD_TOKEN);

  console.log("Registering slash commands...");

  const guilds = [
    "1549135179245686854"
  ];

  for (const guildId of guilds) {
    const result = await rest.put(
      Routes.applicationGuildCommands(
        "1546632087430373416",
        guildId
      ),
      { body: commands }
    );

    console.log(`Registered ${result.length} commands in ${guildId}`);
  }

  console.log("Slash commands registered!");

  client.once("ready", () => {
    console.log(`MeowlDex is ready as ${client.user.tag}`);
    restoreSpawnTimers().catch(error =>
      console.error("SPAWN RESTORE ERROR:", error)
    );
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
