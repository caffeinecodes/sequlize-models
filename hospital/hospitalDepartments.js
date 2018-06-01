"use strict";
import default_schema from "../InitialSchemas/hospitalSchemas/hospitalDepartmentSchema";

export default sequelize => {
  let HospitalDepartment = sequelize.define(
    "HospitalDepartment",
    default_schema,
    {
      classMethods: {}
    }
  );
  HospitalDepartment.associate = models => {
    HospitalDepartment.belongsTo(models.Hospital, {
      foreignKey: "hospital_id",
      onDelete: "CASCADE"
    });
    HospitalDepartment.belongsTo(models.Department, {
      foreignKey: "department_id",
      onDelete: "CASCADE"
    });
  };
  HospitalDepartment.prototype.toJSON = function() {
    let values = this.get({
      plain: true
    });
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return HospitalDepartment;
};
