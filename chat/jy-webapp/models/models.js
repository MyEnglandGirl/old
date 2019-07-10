var mongoose = require('../config/mongoose');
var models = {};


// 聊天
var userChat = mongoose.Schema({
    phone: String,
    password: String,
    address:String,
    sex:String,
    name:String,
    autograph:String,
    friend:Array,
    toVerifyFriend:Array,
    img:Object,
   
});

models.Chat = mongoose.model("Chat", userChat);
//

module.exports = models;
