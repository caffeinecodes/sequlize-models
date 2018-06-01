import DataTypes from "sequelize";
import common_schema from "../commonSchema";
import commonValidator from "../../../validators/commonValidator";

export const gender_types = ["male", "female", "other"];
export const min_name = 1,
  max_name = 40,
  min_ref = 10,
  max_ref = 12;

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
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [min_ref, max_ref],
        msg: "User name should be between " +
          min_ref +
          " and " +
          max_ref +
          " characters"
      }
    }
  },
  dob: {
    type: DataTypes.DATE,
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
  mobile_number: {
    type: DataTypes.STRING,
    validate: {
      custom(value) {
        if (!(value == null || value == "")) {
          commonValidator.is_mobile_no(value);
        }
      }
    },
    allowNull: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  is_password_reset: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    set: function (value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_password_reset", value);
    }
  },
  salt: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      custom(value) {
        if (!(value == null || value == "")) {
          commonValidator.is_otp(value);
        }
      }
    }
  },
  gender: {
    type: DataTypes.ENUM,
    values: gender_types
  },
  is_email_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function (value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_email_verified", value);
    }
  },
  is_mobile_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function (value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_mobile_verified", value);
    }
  },
  is_profile_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function (value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_profile_completed", value);
    }
  },
  verification_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fb_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fb_access_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  last_login: {
    allowNull: true,
    type: DataTypes.DATE
  },
  is_online: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function (value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_online", value);
    }
  }
};
