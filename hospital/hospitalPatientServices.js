"use strict";
import default_schema from "../InitialSchemas/hospitalSchemas/hospitalPatientServiceSchema";

export default sequelize => {
  let HospitalPatientServices = sequelize.define(
    "HospitalPatientServices",
    default_schema,
    {
      classMethods: {}
    }
  );
  HospitalPatientServices.prototype.toJSON = function() {
    let values = this.get({
      plain: true
    });
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return HospitalPatientServices;
};
