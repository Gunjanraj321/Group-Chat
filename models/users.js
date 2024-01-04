const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phonenumber: {
      type: Sequelize.BIGINT(10),
      allowNull: false,
      unique: true,
    },
    imageUrl: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date_time: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = User;