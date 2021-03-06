const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'root', 'root', {
  host: 'db',
  dialect: 'mysql',

  port: 3306,
})
const Model = Sequelize.Model;
//check db authenticate
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
}, {
  // タイムスタンプの属性 (updatedAt, createdAt) が不要ならば次のプロパティは false
  timestamps: false,

  // テーブル名を変更したくない場合は次のプロパティを true
  // デフォルトでは sequelize はテーブル名を複数形に変更する
  freezeTableName: true
});


module.exports = {
  findAllData() {
    return users.findAll()
  }
}