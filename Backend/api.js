var crypto = require('crypto');

var LIQPAY_PUBLIC_KEY = "i60678034320";
var LIQPAY_PRIVATE_KEY = "1A0jJX6dWoH6KCKpETXCcMQVmaM5qkeMowZn3F6v";

function base64(str) {
    return new Buffer(str).toString('base64');
}

function sha1(string) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(string);
    return sha1.digest('base64');
}

var Pizza_List = require('./data/Pizza_List');

exports.getPizzaList = function(req, res) {
    res.send(Pizza_List);
};

exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);
    
    var info = "Замовлені піци: " + order_info.list + " Ім'я платника: " + order_info.FIO + ". Адреса доставки: " + order_info.adress + ". Мобільний: " + order_info.phone + ".";

    var order = {
        version: 3,
        public_key: LIQPAY_PUBLIC_KEY,
        action: "pay",
        amount: order_info.price,
        currency: "UAH",
        description: info,
        order_id: Math.random(),
        
        sandbox: 1
    };
    
    var data = base64(JSON.stringify(order));
    var signature = sha1(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY);
    
    res.send({
        success: true,
        data: data,
        signature: signature
    });
};