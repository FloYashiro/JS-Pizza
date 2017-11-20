exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Вибір Піци'
    });
};

exports.orderPage = function(req, res) {
    //TODO: implement
	res.render('orderPage', {
        pageTitle: 'Замовлення'
    });
};