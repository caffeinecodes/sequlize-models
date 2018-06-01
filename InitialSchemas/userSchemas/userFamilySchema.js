import DataTypes from "sequelize";
import common_schema from "../commonSchema";

export const gender_types = ["male", "female", "other"];

export default {
  ...common_schema,
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  user_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    onDelete: "CASCADE",
    references: {
      model: "Users",
      key: "id"
    }
  },
  avatar_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender: {
    type: DataTypes.ENUM,
    values: gender_types
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: true
  },
  residing_in: {
    type: DataTypes.STRING,
    allowNull: true
  },
  citizen_of: {
    type: DataTypes.STRING,
    allowNull: true
  },
  passport_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function (value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_default", value);
    }
  },
};
