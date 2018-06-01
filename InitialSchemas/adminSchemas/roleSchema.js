import DataTypes from "sequelize";
import common_schema from "../commonSchema";

export const min_name = 1,
  max_name = 40,
  min_desc = 3,
  max_desc = 100;

export default {
  ...common_schema,
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: {
        args: [min_name, max_name],
        msg: "Name should be between " +
          min_name +
          " and " +
          max_name +
          " characters"
      }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: {
        args: [min_desc, max_desc],
        msg: "Description should be between " +
          min_desc +
          " and " +
          max_desc +
          " characters"
      }
    }
  }
};
