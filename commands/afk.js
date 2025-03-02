module.exports = [{
    name: "afk",
    code: `
  $deleteIn[5s]
  $description[<@!$authorID>, **Artık Biri Seni Etiketlediğinde \`$noMentionMessage\` Sebebinden AFK Durumunda Diyeceğim!**]
  
  $setUserVar[afk;yes]
  
  $setUserVar[afkmsg;$noMentionMessage]
  
  $onlyIf[$getUserVar[afk;$authorID]==no;]
  
  $onlyIf[$message!=;Lütfen Bir __Sebep__ Belirtiniz!]
  `
  }
  ,{
    name: "$alwaysExecute",
    code: `
  **Hoşgeldin <@$authorID>, Artık AFK Değilsin.**
  $setUserVar[afk;no]
  $setUserVar[afkmsg;]
  $onlyIf[$getUserVar[afk;$authorID]==yes;]
  $deleteIn[5s]
  `
  },{
    name: "$alwaysExecute",
    code: `
    $deletecommand
  <@!$authorID>, \`$username[$mentioned[1]]\` **Şuanda** \`$getUserVar[afkmsg;$mentioned[1]]\` **Sebebi ile AFK Durumunda!**
  $deleteIn[6s]
  $onlyIf[$getUserVar[afk;$mentioned[1;no]]==yes;]
  $deleteIn[5s]
  `
}]