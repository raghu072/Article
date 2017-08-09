var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/articles/add', function(req, res, next) {
    var articles = [{
            id: 1,
            name: "Akshay R K",
            author: 'Ghostrider',
            title: "CStrike Ghostrider"
        },
        {
            id: 2,
            name: "Darashan Kalihal",
            author: 'Jhon',
            title: "CStrike Jhon"
        },
        {
            id: 3,
            name: "Mrutunjay Kubsad",
            author: 'Robber',
            title: "CStrike Robber"
        },
    ];
    res.render('add_article', { title: 'Add Article', articles: articles });
});

module.exports = router;