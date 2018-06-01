import DataTypes from "sequelize";
import common_schema from "../commonSchema";

export default {
  ...common_schema,
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  department_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    onDelete: "CASCADE",
    references: {
      model: "Department",
      key: "id"
    }
  },
  // hospital_id: {
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   onDelete: "CASCADE",
  //   references: {
  //     model: "Hospital",
  //     key: "id"
  //   }
  // },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
};
