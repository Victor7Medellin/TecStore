const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'db-mysql-nyc1-95827-do-user-14237196-0.b.db.ondigitalocean.com',
    port: 25060,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

// Synchronize the model and create the table in the database
sequelize.sync()
    .then(() => {
        console.log('Tables created successfully');
    })
    .catch((error) => {
        console.log('Error creating tables', error);
    });
module.exports = sequelize;


