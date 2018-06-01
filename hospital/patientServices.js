"use strict";
import default_schema from "../InitialSchemas/hospitalSchemas/patientServiceSchema";

export default sequelize => {
  let PatientServices = sequelize.define("PatientServices", default_schema, {
    classMethods: {}
  });
  PatientServices.prototype.toJSON = function () {
    let values = this.get({
      plain: true
    });
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return PatientServices;
};
