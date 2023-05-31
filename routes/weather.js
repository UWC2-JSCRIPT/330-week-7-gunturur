const {Router} = require('express');
const router = Router();

const Weather = require('../daos/weather');

router.get('/', (req, res, next) => {
    //res.render('weather', {title: 'Weather', weather: 'sunny', temp: '75'});
    res.render('weather', { title: 'Weather' });

});

router.get('/location', async (req, res) => {
    const locationName = req.query.name;
    console.log(locationName);
    if (!locationName) {
        return res.status(302).redirect('/weather');
      }
    
    const location = await Weather.getWeatherByName(locationName);
    
    if (!location) {
        return res.status(404).render('error', { message: `The weather for ${locationName} is not available` });
    }
    res.render('location', { name: location.name, temperature: location.temperature });

});

module.exports = router;
