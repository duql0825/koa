const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "member",
  {
    id: {
      type: Sequelize.STRING(30),
      primaryKey: true,
      autoIncrement: false,
      allowNull: false,
    },
    pw: {
      type: Sequelize.STRING(30),
      autoIncrement: false,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(30),
      autoIncrement: false,
      allowNull: false,
    },
    nickname: {
      type: Sequelize.STRING(30),
      autoIncrement: false,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
