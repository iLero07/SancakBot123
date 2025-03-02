const embedRenk = '2B2D31';

const emoji1 = '🟢';
const emoji2 = '🔴';

module.exports = [{
    name: "bakım-aç",
    code: `
$author[$guildName;$guildIcon]
$description[
${emoji1}<@!$authorID> Bot bakım moduna alındı.
]    
$addTimestamp
$color[${embedRenk}]

$addButton[1;Bakım Kapat;danger;bakımKapatButon;false]

$setVar[bakımModu;açık]

$onlyIf[$getVar[bakımModu]!=açık;<@!$authorID> Bakım modu zaten __açık__ durumda]

$onlyForIDs[$clientOwnerIDs;<@!$authorID> Bu komutu sadece geliştiricim kullanabilir.]
`
},{
    name: "bakım-kapat",
    code: `
$author[$guildName;$guildIcon]
$description[
${emoji2}<@!$authorID> Bot bakım modundan çıkartıldı.
]    
$addTimestamp
$color[${embedRenk}]

$addButton[1;Bakım Aç;succes;bakımAçButon;false]

$setVar[bakımModu;kapalı]

$onlyIf[$getVar[bakımModu]!=kapalı;<@!$authorID> Bakım modu zaten __kapalı__ durumda]

$onlyForIDs[$clientOwnerIDs;<@!$authorID> Bu komutu sadece geliştiricim kullanabilir.]
`
},{
    type: "awaited",
    name: "bakımtext",
    code: `
$reply
$author[$guildName;$guildIcon]
$description[
Merhaba <@!$authorID>, Şuanda bakım modunda olduğum için komutlarımı kullanamıyorsun. Yakında yep yeni halim ile sizlerle olacağım.
]
$addTimestamp
$color[${embedRenk}]
$deleteIn[10s]
$deleteCommand
`
},{
    type: "interaction",
    prototype: 'button',
    name: "bakımAçButon",
    code: `
$interactionUpdate[;{newEmbed:{author:$guildName:$guildIcon}{description:
    ${emoji1}<@!$authorID> Bot bakım moduna alındı.
}{timestamp}{color:${embedRenk}}};{actionRow:{button:Bakım Kapat:danger:bakımKapatButon:false}};;everyone;false]   

$setVar[bakımModu;açık]

$onlyIf[$getVar[bakımModu]!=açık;<@!$authorID> Bakım modu zaten __açık__ durumda{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyForIDs[$clientOwnerIDs;<@!$authorID> Bu komutu sadece geliştiricim kullanabilir.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
    type: "interaction",
    prototype: 'button',
    name: "bakımKapatButon",
    code: `
$interactionUpdate[;{newEmbed:{author:$guildName:$guildIcon}{description:
    ${emoji1}<@!$authorID> Bot bakım modundan çıkartıldı.
}{timestamp}{color:${embedRenk}}};{actionRow:{button:Bakım Aç:success:bakımAçButon:false}};;everyone;false]   

$setVar[bakımModu;kapalı]

$onlyIf[$getVar[bakımModu]!=açık;<@!$authorID> Bakım modu zaten __kapalı__ durumda{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyForIDs[$clientOwnerIDs;<@!$authorID> Bu komutu sadece geliştiricim kullanabilir.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]