const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.BIGINT(10),
      unique: true,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    date_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW, 
    },
  },
  {
    timestamps: false,
  }
);
module.exports=User;