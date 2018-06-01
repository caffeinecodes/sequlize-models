"use strict";
import default_schema from "../InitialSchemas/hospitalSchemas/hospitalSchema";

export default sequelize => {
  let Hospital = sequelize.define("Hospital", default_schema, {
    classMethods: {}
  });
  Hospital.associate = models => {
    Hospital.hasOne(models.HospitalProfile, {
      foreignKey: "hospital_id",
      onDelete: "CASCADE"
    });
  };
  Hospital.prototype.toJSON = function() {
    let values = this.get({
      plain: true
    });
    delete values.salt;
    delete values.password;
    delete values.otp;
    delete values.verification_token;
    delete values.fb_id;
    delete values.fb_access_token;
    delete values.last_login;
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return Hospital;
};
