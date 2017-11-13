const Express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

//const vs = require('./src/services/vehicle-service');
const app = new Express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.set('view engine', 'html');
app.engine('html', hbs.__express); // eslint-disable-line
app.set('views', path.join(__dirname, './views'));

app.use(Express.static(path.join(__dirname, './dist')));
app.use('/static', Express.static('./images'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/vehicle', (req, res) => {
    const vehicles = require('./server_api/vehicles.js');
    res.json(vehicles);
});

app.get('/api/vehicle/:id', (req, res) => {
    const vehicle = require('./server_api/vehicle_'+ req.params.id +'.js');
    res.json(vehicle);
});

app.post('/api/vehicle', (req, res) =>{
    const vehicleIds = JSON.parse(req.body.ids[0]);
    let vehicles = [];
    vehicleIds.forEach(id => {
        vehicles.push(require('./server_api/vehicle_'+ id +'.js'));
    });
    res.json(vehicles);
});

app.get('*', (req, res) => {
    res.render('index');
});

module.exports = app;
