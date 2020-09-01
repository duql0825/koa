const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "nodejs_tasks",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task_name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
