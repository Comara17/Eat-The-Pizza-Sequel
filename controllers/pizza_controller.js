var express = require('express');
var router = express.Router();

var db = require('../models');

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
    db.Pizza.findAll({})
        .then(function (dbPosts) {
            res.render("index", {
                pizzas: dbPosts
            });
        });
});

router.post("/", function (req, res) {
    db.Pizza.create({
        name: req.body.name
    }).then(function (dbPost) {
        res.redirect('/');
    })
});


router.put("/:id", function (req, res) {
    db.Pizza.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect("/");
});

module.exports = router;