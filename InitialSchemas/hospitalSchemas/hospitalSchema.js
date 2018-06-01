import DataTypes from "sequelize";
import common_schema from "../commonSchema";
import commonValidator from "../../../validators/commonValidator";

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
  legal_name: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: {
        args: [min_name, max_name],
        msg:
          "Name should be between " +
          min_name +
          " and " +
          max_name +
          " characters"
      }
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contact_person_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profile_managed_by: {
    type: DataTypes.ENUM,
    values: ["Manager", "HR"],
    defaultValue: "HR"
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
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      custom(value) {
        if (!(value == null || value == "")) {
          commonValidator.is_password(value);
        }
      }
    }
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
  is_email_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function(value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_email_verified", value);
    }
  },
  is_mobile_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function(value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_mobile_verified", value);
    }
  },
  is_profile_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    set: function(value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_profile_completed", value);
    }
  },
  verification_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  google_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  google_access_token: {
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
    set: function(value) {
      if (value === "true") value = true;
      if (value === "false") value = false;
      this.setDataValue("is_online", value);
    }
  }
};
