const Sequelize = require('sequelize');
const db = new Sequelize('mysql://root:smm30487739@localhost:3306/missingdog', {
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
        timestamps: true
    }
});
db.sync();
module.exports = db;
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// module.exports = {sequelize, Sequelize}