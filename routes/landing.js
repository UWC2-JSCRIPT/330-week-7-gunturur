const {Router} = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    const timestamp = new Date().toTimeString();
    res.render('index', {time: timestamp, items: ['apple', 'orange', 'banana']}); 

});

module.exports = router;

