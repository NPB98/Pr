const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const cors = require('cors');

const User = require('./models/users');

const adminRoute = require('./routes/admin');

app.use(cors());

app.use(bodyParser.json());

app.use('/',adminRoute);

sequelize.sync()
.then(result => app.listen(4000))
.catch(err => console.log(err));