const { AoiClient } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");

const client = new AoiClient({
    token: "", // Here goes the Token you copied earlier!
    prefix: "$getVar[prefix]", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates","GuildMembers"],
    events: ["onMessage", "onInteractionCreate","onJoin", "onLeave"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

const voice = new AoiVoice(client, {
    requestOptions: {
      offsetTimeout: 0,
      soundcloudLikeTrackLimit: 200,
    },
    searchOptions: {
     youtubeClient: "WEB"
    }
  });

client.variables({
    prefix:".",
    abonerol:"1318327445853835395",
    bakımModu: "kapalı",
    afk:"no",
    afkmsg:" ",
    duyurukanal:"1339684741951000729",
    footer:"Saygınlar Transport Yönetim.",
    gçkanal:"",
    otorol:"", 
    otorolk:"" 
})

client.loadCommands("./commands");

client.status({
    name: "Saygınlar Transport.",
    type: "WATCHING",
    status: "dnd",
    time: 12
});

client.joinCommand({
    channel: "$getGuildVar[gçkanal]",
    code: `
  Sunucumuza Hoşgeldin <@!$authorID> Seninle Birlikte **$membersCount** Kişiyiz!
  `
  })
client.leaveCommand({
    channel: "$getGuildVar[gçkanal]",
    code: `
  Görüşmek Üzere <@!$authorID> Seni Özleyeceğiz!
  `
  })

  client.joinCommand({
    channel: "$getGuildVar[otorolk]",
    code: `
  **<@!$authorID>, Sunucumuza Katıldı, Başarılı Bir Şekilde Rolünü Verdim!** 
  
  $giveRole[$guildID;$authorID;$getGuildVar[otorol]]
  
  $onlyIf[$getGuildVar[otorol]!=; ]
  `
  })
