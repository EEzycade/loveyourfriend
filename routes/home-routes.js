const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/team', (req, res) => {
    res.render('team');
});

router.get('/story', (req, res) => {
    res.render('story');
});

module.exports = router;