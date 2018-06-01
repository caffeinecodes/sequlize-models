"use strict";
import default_schema from "../InitialSchemas/hospitalSchemas/DeaprtmentSchema";

export default sequelize => {
  let Department = sequelize.define("Department", default_schema, {
    classMethods: {}
  });
  Department.prototype.toJSON = function () {
    let values = this.get({
      plain: true
    });
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return Department;
};
