module.exports = [{
    name:"öneri",
    code:`
    $title[Saygınlar Transport Öneri]
    $description[Lütfen önerinizi aşağıdakı Öneri yazan butona tıklayarak yazınız.]
    $addButton[1;Öneri;secondary;oneri;no;💡]
    $deleteCommand`
},{
    name:"oneri",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionModal[Öneri!;oneriID;
    {actionRow:
    {textInput:Öneriniz nedir?:1:oneriinput:true:Önerin:2:200}}]`
},{

    name:"oneriID",
    type:"interaction",
     prototype:"modal",
    code:`
    $interactionReply[Önerin için teşekkürler!;everyone;true;false]
    $channelSendMessage[1340601452695126066;{newEmbed:{title:Yeni bir öneri var!}{description:$textInputValue[oneriinput]}};false]
    `
}]