var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require("../models/models");
var multiparty = require('multiparty');
var images = require("images");
var uuidV4 = require('uuid/v4');

//加好友
router.setSocket = function(server) {
    // console.log("成功")
    var io = require('socket.io')(server);
    io.on('connection', function(socket) { //发送    
        // 群聊
        socket.on('broadcast', function(data) {
            // 接收到数据就发送
            console.log("L19", data);
            socket.broadcast.emit('broadcast', data);
        });
        // 私聊
        socket.on('private', function(data) {
            console.log("连接成功")
                // 接收到数据就发送
            console.log("L27", data);
            var max = Math.max(data.from, data.to);
            var min = Math.min(data.from, data.to);
            var room = max.toFixed() + min;
            console.log(room)
            socket.join(room)
            socket.to(room).emit('private', data);
            socket.in(room).emit('private', data);
            console.log("发送完")
        });
    });
}


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// mongoose.connect('mongodb://localhost/chat');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'conection error:'));
// db.once('open', function() {
//     console.log("测试成功")
// });
// 注册
var Chat = models.Chat;
router.post("/chat/register/", function(req, res) {
    console.log(req.body);
    var chat = new Chat(req.body);
    Chat.find({ 'phone': chat.phone }, function(err, users) {
        if (err) {
            console.log(err);
        } else {
            if (users.length == 0) { //判断是否已经注册                
                chat.save(function(err) {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        res.status(200).json({
                            status: true,
                            message: "注册成功！"
                        });
                    }
                });
            } else {
                res.status(200).json({
                    status: false,
                    message: "已经注册！"
                });
            }
        }
    });
});


// 登录
router.post("/chat/login/", function(req, res) {
    // console.log(req.body);
    var chat = new Chat(req.body);
    Chat.findOne({ 'phone': chat.phone }, function(err, users) {
        if (err) {
            console.log(err);
        } else {

            if (users == null) {
                res.status(200).json({
                    status: false,
                    message: "账号未注册"
                });
            } else {
                console.log(users)
                console.log(users.phone)
                if (chat.phone == users.phone && chat.password == users.password) {
                    res.status(200).json({
                        status: true,
                        message: "登录成功！"
                    });
                } else {
                    res.status(200).json({
                        status: false,
                        message: "密码错误"
                    });
                }
            }
        }

    });

});
// 获取个人信息
router.get("/chat/user/", function(req, res) {
    console.log(req.query);

    Chat.findOne({ 'phone': req.query.phone }, function(err, users) {
        if (err) {
            console.log(err);
        } else {
            if (users == null) {
                //检查搜索的用户是否存在
                res.status(200).json({
                    status: false,
                    message: "未找到用户名",
                })
            } else {
                //搜索的用户存在，自己的好友列表中是否有搜索的好友req.query.phone
                var arr = users.friend;
                var arr2 = users.toVerifyFriend;
                // 循环好友列表， 检查搜索的用户req.query.phone是不是好友
                if (arr.length == 0) {
                    if (arr2.length == 0) {
                        // 不是好友
                        console.log('好友，代加为空，不是好友')
                        res.status(200).json({
                            status: true,
                            myfriend: false,
                            send: false,
                            addfriend: true,
                            message: "还不是好友，获取数据",
                            usersData: users,
                        })
                    } else {
                        //不是好友，判断搜索的用户是否已经发送过请求
                        for (var i = 0; i < arr2.length; i++) {
                            if (req.query.selfPhone == arr2[i]) {
                                console.log('好友为空，循环代加，已经发送请求')
                                res.status(200).json({
                                    status: true,
                                    myfriend: false,
                                    send: true,
                                    addfriend: false,
                                    message: "已经发送请求，等待验证,获取数据",
                                    usersData: users,
                                })
                            } else {
                                console.log('好友为空，循环代加，不是好友')
                                res.status(200).json({
                                    status: true,
                                    myfriend: false,
                                    send: false,
                                    addfriend: true,
                                    message: "还不是好友，获取数据",
                                    usersData: users,
                                })

                            }
                            break
                        }
                    }

                } else {
                    for (var i = 0; i < arr.length; i++) {
                        if (req.query.selfPhone == arr[i]) {
                            console.log('好友不为空，循环好友，是好友')
                            res.status(200).json({
                                status: true,
                                myfriend: true,
                                send: false,
                                addfriend: false,
                                message: "已经是好友了,获取数据11",
                                usersData: users,
                            })
                        } else {
                            if (arr2.length == 0) {
                                // 不是好友
                                console.log('好友不为空，代加为空，不是好友')
                                res.status(200).json({
                                    status: true,
                                    myfriend: false,
                                    send: false,
                                    addfriend: true,
                                    message: "还不是好友，获取数据",
                                    usersData: users,
                                })
                            } else {
                                //不是好友，判断搜索的用户是否已经发送过请求
                                console.log('好友不为空，代加不为空，已经发送请求')
                                for (var i = 0; i < arr2.length; i++) {
                                    if (req.query.selfPhone == arr2[i]) {
                                        res.status(200).json({
                                            status: true,
                                            myfriend: false,
                                            send: true,
                                            addfriend: false,
                                            message: "已经发送请求，等待验证,获取数据",
                                            usersData: users,
                                        })
                                    } else {
                                        //不是好友
                                        res.status(200).json({
                                            status: true,
                                            myfriend: false,
                                            send: false,
                                            addfriend: true,
                                            message: "还不是好友，获取数据",
                                            usersData: users,
                                        })

                                    }
                                    break
                                }

                            }

                        }
                        break
                    }

                }
                // for (var i = 0; i < arr.length; i++) {
                //  console.log(req.query.selfPhone,arr[0])                
                //     console.log(users.toVerifyFriend)
                //     if (req.query.selfPhone == arr[i]) {
                //         res.status(200).json({
                //             status: true,
                //             myfriend: true,
                //             send: false,
                //             addfriend: false,
                //             message: "已经是好友了,获取数据11",
                //             usersData: users,
                //         })
                //     }

                // }
                //不是好友，判断搜索的用户是否已经发送过请求
                // console.log("148", users)
                // for (var i = 0; i < arr2.length; i++) {
                //     if (req.query.selfPhone == arr2[i]) {
                //         res.status(200).json({
                //             status: true,
                //             myfriend: false,
                //             send: true,
                //             addfriend: false,
                //             message: "已经放松请求，等待验证,获取数据",
                //             usersData: users,
                //         })
                //     }

                // }
                //不是好友
                // res.status(200).json({
                //     status: true,
                //     myfriend: false,
                //     send: false,
                //     addfriend: true,
                //     message: "还不是好友，获取数据",
                //     usersData: users,
                // })
            }
        }
    })
});

// 呢称
router.post("/chat/user/name/", function(req, res) {
    console.log(req.body);
    var chat = new Chat(req.body);
    console.log(chat.phone)
    Chat.update({
        'phone': chat.phone
    }, {
        "name": chat.name
    }, function() {
        res.status(200).json({
            status: true,
            message: "保存成功"
        });
    });
});
// 个性   签名
router.post("/chat/user/autograph/", function(req, res) {
    console.log(req.body);
    var chat = new Chat(req.body);
    console.log(chat.phone)
    Chat.update({
        'phone': chat.phone
    }, {
        "autograph": chat.autograph
    }, function() {
        res.status(200).json({
            status: true,
            message: "保存成功"
        });
    });
});
// 地址
router.post("/chat/user/address/", function(req, res) {
    console.log(req.body);
    var chat = new Chat(req.body);
    console.log(chat.phone)
    Chat.update({
        'phone': chat.phone
    }, {
        "address": chat.address
    }, function() {
        res.status(200).json({
            status: true,
            message: "保存成功"
        });
    });
});
//性别
router.post("/chat/user/sex/", function(req, res) {
    console.log(req.body);
    var chat = new Chat(req.body);
    console.log(chat.phone)
    Chat.update({
        'phone': chat.phone
    }, {
        "sex": chat.sex
    }, function() {
        res.status(200).json({
            status: true,
            message: "保存成功"
        });
    });
});
//发送好友请求
router.post("/chat/user/friend/", function(req, res) {
    console.log(req.body);
    Chat.findOne({ 'phone': req.body.phone }, function(err, users) {
        if (err) {
            console.log(err)
        } else {
            users.toVerifyFriend.push(req.body.selfPhone);
            Chat.update({
                'phone': req.body.phone
            }, {
                "toVerifyFriend": users.toVerifyFriend
            }, function() {
                res.status(200).json({
                    status: true,
                    message: "好友请求发送成功"
                });

            });
        }
    })

});
// 头像上传
router.post("/chat/user/img/update", function(req, res) {
    // console.log(req.body);
    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
        // console.log(fields);
        // console.log(files);

        var size = files.img[0].size;
        var path = files.img[0].path;
        var type = files.img[0].headers["content-type"];
        var fileTag = type.split("/")[1];
        var filename = uuidV4();
        var fileFolder = 'images/img/';

        // var savePath = 'public/form/' + fileFolder + filename + '.' + fileTag;

        if (type.indexOf("image") > -1) {
            if (size > 2048000) {
                res.status(200).json({
                    status: false,
                    message: "图片大小不对"
                });

            } else {
                images(files.img[0].path) //Load image from file 
                    //加载图像文件
                    .size(320, 320) //Geometric scaling the image to 400 pixels width
                    //等比缩放图像到400像素宽
                    // .draw(images("logo.png"), 10, 10) //Drawn logo at coordinates (10,10)
                    //在(10,10)处绘制Logo
                    .save('public/' + fileFolder + 'sm_' + filename + '.' + fileTag, {
                        quality: 70 //保存图片到文件,图片质量为50
                    });
                var imgUrl = {
                        sm_img: "http://127.0.0.1:3000/" + fileFolder + 'sm_' + filename + '.' + fileTag,
                    }
                    // 返回图片地址
                res.status(200).json({
                    status: true,
                    message: '上传成功',
                    data: imgUrl
                });

            }
        } else {
            res.status(200).json({
                status: false,
                message: "图片格式不对"
            });
        }
    });

});
// 头像存储
router.post("/chat/user/img/save/", function(req, res) {
    console.log(req.body);
    var chat = new Chat(req.body);
    console.log(chat.phone)
    Chat.update({
        'phone': chat.phone
    }, {
        "img": chat.img
    }, function() {
        res.status(200).json({
            status: true,
            message: "保存成功"
        });
    });
});
//获取请求添加好友的列表
router.get("/chat/toverifyfriend/", function(req, res) {
    // console.log(req.query)

    Chat.findOne({ "phone": req.query.phone }, function(err, users) {
        if (err) {
            console.log(err);
        } else {
            arr = users.toVerifyFriend;

            res.status(200).json({
                status: true,
                message: "获取数据成功",
                usersData: users.toVerifyFriend
            });
        }
    })
})

//获取好友的个人信息
router.post("/chat/addfriend/", function(req, res) {
        // console.log(req.body);
        Chat.find({ "phone": req.body }).exec(function(err, user) {
            if (err) {
                console.log(err)
            } else {

                res.status(200).json({
                    status: true,
                    message: "获取数据成功",
                    userData: user
                })
            }
        })
    })
    //获取好友列表
router.get("/chat/friendlist/", function(req, res) {
        // console.log(req.query)
        Chat.findOne({ "phone": req.query.phone }, function(err, users) {
            if (err) {
                console.log(err);
            } else {
                arr = users.friend;

                res.status(200).json({
                    status: true,
                    message: "获取数据成功",
                    usersData: users.friend
                });
            }
        })
    })
    //同意添加好友
router.post('/chat/agree/', function(req, res) {
        console.log(req.body)
        Chat.find({ "phone": req.body.phone }).exec(function(err, user) {
            if (err) {
                console.log(err)
            } else {

                user[0].friend.push(req.body.selfPhone);
                Chat.update({
                    'phone': req.body.phone
                }, {
                    "friend": user[0].friend
                }, function() {});
            }
        })
        Chat.find({ "phone": req.body.selfPhone }).exec(function(err, user) {
            if (err) {
                console.log(err)
            } else {
                //删除selfPhone的代价好友列表
                user[0].toVerifyFriend.remove(req.body.phone);
                Chat.update({
                    'phone': req.body.selfPhone
                }, {
                    "toVerifyFriend": user[0].toVerifyFriend
                }, function() {});

                user[0].friend.push(req.body.phone);
                Chat.update({
                    'phone': req.body.selfPhone
                }, {
                    "friend": user[0].friend
                }, function() {
                    res.status(200).json({
                        status: true,
                        message: "添加成功",
                    })
                });
            }
        })
    })
    //群聊
router.setSocket = function(server) {
    //  console.log('11');
    var io = require('socket.io')(server);
    //
    io.on('connection', function(socket) {

        //       socket.emit('broadcast', { hello: 'world!' });
        //群聊
        socket.on('broadcast', function(data) {
            //发送
            /*socket.broadcast.emit('broadcast', data)*/
            ;
            io.sockets.emit('broadcast', data);

        });
        //私聊
        socket.on('private', function(data) {
            console.log(data);
            var room = '';
            var m = data.to;
            var n = data.from;
            if (m > n) {
                room = m + n;
            } else {
                room = n + m;
            }
            socket.join(room);
            socket.to(room).emit('private', data);
        });
    });
}

//聊天


module.exports = router;
