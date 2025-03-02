module.exports = {
    name: "giriş-çıkış-ayarla",
    aliases: "gç-ayarla",
    code: `
    $author[$username;$userAvatar]
  $description[Giriş Çıkış Kanalı Başarılı Bir Şekilde Ayarlandı!
  > » Ayarlanan Kanal:
  <#$mentionedChannels[1]>
  > » Ayarlayan Yetkili:
  <@!$authorID>]
  $color[Purple]
  
  $setGuildVar[gçkanal;$mentionedChannels[1]]
  
  $onlyPerms[administrator;Bu Komutu Kullanmak için Yetkin Bulunmamakta!]
  
  `
  }