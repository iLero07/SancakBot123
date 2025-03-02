module.exports = [{
    name: "otorol",
    code: `
  <@$authorID>, Yanlış Kullanım
  » Doğru Kullanım: \`!otorol ayarla/sıfırla\`
  `
  },{
    name: "otorol ayarla",
    code: `
  <@$authorID>, Başarılı Bir Şekilde Otorol Rolü <@&$mentionedRoles[1]> **/** Otorol Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı.
  
  $setGuildVar[otorolk;$mentionedChannels[1]]
  $setGuildVar[otorol;$mentionedRoles[1]]
  
  $onlyPerms[administrator;<@$authorID>, Bu Komutu Kullanmak için \`YÖNTİCİ\` İznin Olması Gerekiyor!]
  
  $onlyIf[$mentionedRoles[1]!=undefined;<@$authorID>, Lütfen Bir Rol Etkietleyerek Terkrar Deneyiniz!]
  
  $onlyIf[$mentionedChannels[1]!=undefined;<@$authorID>, Lütfen Bir Kanal Etkietleyerek Terkrar Deneyiniz!]
  `
  },{
    name: "otorol sıfırla",
    code: `
  <@$authorID>, Başarılı Bir Şekilde Otorol Sıfırlandı.
  
  $resetGuildVar[otorol]
  $resetGuildVar[otorolk]
  
  $onlyPerms[administrator;<@$authorID>, Bu Komutu Kullanmak için \`YÖNTİCİ\` İznin Olması Gerekiyor!]
  `
  }]