const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./util/database');
const User = require('./models/users');
const Forgotpassswords = require('./models/forgot-password');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

User.hasMany(Forgotpassswords);
Forgotpassswords.belongsTo(User , {constraints: true,onDelete: "CASCADE"});

const mainRoute = require('./routes/home');
const userRoute = require('./routes/user');
app.use('/', mainRoute);
app.use('/user', userRoute);

const port = process.env.PORT || 3000;

async function initiate() {
    try {
        await sequelize.sync();
        app.listen(port, () => {
            console.log('Server running on port ' + port);
        });
    } catch (err) {
        console.log('Error occurred during server initialization:', err);
    }
}

initiate();
