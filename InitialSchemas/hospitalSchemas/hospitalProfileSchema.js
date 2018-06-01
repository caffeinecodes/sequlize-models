import DataTypes from "sequelize";
import common_schema from "../commonSchema";
import commonValidator from "../../../validators/commonValidator";

export default {
  ...common_schema,
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  hospital_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    onDelete: "CASCADE",
    references: {
      model: "Hospital",
      key: "id"
    }
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
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      custom(value) {
        if (!(value == null || value == "")) {
          commonValidator.is_email(value);
        }
      }
    },
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  }
};
