// Import express
let express = require ('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// init the app
let app = express();

// Routes are Imported yet
let apiRoutes =  require("./route/api-routes")

// configure BodyParser to handle post requests

app.use(bodyParser.urlencoded({
    extended: true 
}));

app.use(bodyParser.json());

// Connect to  Mongoose and set connection Variable
mongoose.connect('mongodb://localhost/simplerest');
let db = mongoose.connection;

// setup server port
let port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('RESTful Api With Express'));

// Use Api routes in the App

app.use('/api', apiRoutes)

// Launch Server
app.listen(port, () => {console.log("Yo!! SimpleRest is running on port " + port)});