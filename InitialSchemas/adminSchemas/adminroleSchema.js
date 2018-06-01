import DataTypes from "sequelize";
import common_schema from "../commonSchema";

export default {
  ...common_schema,
  admin_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
};
