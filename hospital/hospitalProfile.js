"use strict";
import default_schema from "../InitialSchemas/hospitalSchemas/hospitalProfileSchema";

export default sequelize => {
  let HospitalProfile = sequelize.define("HospitalProfile", default_schema, {
    classMethods: {}
    // tableName: "HospitalProfiles"
  });
  HospitalProfile.associate = models => {
    HospitalProfile.belongsTo(models.Hospital, {
      foreignKey: "hospital_id",
      onDelete: "CASCADE"
    });
  };
  HospitalProfile.prototype.toJSON = function() {
    let values = this.get({
      plain: true
    });
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return HospitalProfile;
};
