"use strict";
import default_schema from "../InitialSchemas/adminSchemas/adminSchema";

export default sequelize => {
  let Admin = sequelize.define("Admin", default_schema, {
    classMethods: {}
  });
  Admin.associate = models => {
    Admin.belongsToMany(models.Role, {
      through: "AdminRoles",
      foreignKey: "admin_id",
      otherKey: "role_id"
    });
  };
  Admin.prototype.toJSON = function () {
    let values = this.get({
      plain: true
    });
    delete values.salt;
    delete values.password;
    delete values.is_password_reset;
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
  return Admin;
};
