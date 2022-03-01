var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hallo", (reg, res) => {
  res.send("Das ist ein Test!");
})

router.get("/tschau", (reg, res) => {
  res.send("Tschau und auf Wiedersehen...");
})

module.exports = router;
