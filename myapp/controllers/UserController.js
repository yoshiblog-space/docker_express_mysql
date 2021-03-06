const Users = require('../models/User');


module.exports = {
  doGetDb: function (req, res, next) {
    Users.findAllData()
      .then((record) => {
        const recordValue = record[0]
        res.render('index', { dbContent: JSON.stringify(recordValue.dataValues) });
      })
      .catch((err) => {
        console.log('err');
      });
  }
}