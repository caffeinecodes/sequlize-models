import DataTypes from "sequelize";
export const status_list = ["active", "deleted"];
export const reference_type = ["bcci"],
  min_refe = 1,
  max_refe = 20;

export default {
  status: {
    type: DataTypes.ENUM,
    values: status_list,
    defaultValue: "active"
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: new Date()
  }
};
