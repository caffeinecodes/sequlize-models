"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import logger from "../lib/logger";
import { getConfig } from "../lib/util";
const basename = path.basename(__filename);
let db = {};
// Load config file based on the enviroment
const config = getConfig();

let sequelize = null;
const Op = Sequelize.Op;
const operatorsAliases = {
  $gt: Op.gt,
  $gte: Op.gte,
  $ne: Op.ne,
  $in: Op.in,
  $or: Op.or,
  $and: Op.and,
  $like: Op.and
};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  let database_conf = config[process.env.NODE_ENV];
  sequelize = new Sequelize(
    database_conf.database,
    database_conf.username,
    database_conf.password,
    {
      host: database_conf.host,
      dialect: database_conf.dialect,
      operatorsAliases: operatorsAliases
    }
  );
}

const files = [];
const sortDir = maniDir => {
  const folders = [];
  const CheckFile = filePath => fs.statSync(filePath).isFile();
  const sortPath = dir => {
    fs
      .readdirSync(dir)
      .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
      .forEach(res => {
        const filePath = path.join(dir, res);
        if (filePath.indexOf("Schema") == -1) {
          if (CheckFile(filePath)) {
            files.push(filePath);
          } else {
            folders.push(filePath);
          }
        }
      });
  };
  folders.push(maniDir);
  let i = 0;
  do {
    sortPath(folders[i]);
    i += 1;
  } while (i < folders.length);
};
sortDir(__dirname);

files.forEach(file => {
  const model = sequelize["import"](file);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  console.log(modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync({
  logging: false
});

module.exports = db;
