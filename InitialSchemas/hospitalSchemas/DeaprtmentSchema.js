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
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  img_original: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      isUrl: {
        args: true,
        msg: "Not a valid URL"
      }
    }
  },
  img_small: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      isUrl: {
        args: true,
        msg: "Not a valid URL"
      }
    }
  },
  img_large: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      isUrl: {
        args: true,
        msg: "Not a valid URL"
      }
    }
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function (value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_default", value);
    }
  }
};
