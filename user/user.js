"use strict";
import default_schema from "../InitialSchemas/userSchemas/userSchema";

export default sequelize => {
  let User = sequelize.define("User", default_schema, {
    classMethods: {}
  });
  User.associate = models => {
    User.hasMany(models.UserFamily, {
      foreignKey: "user_id",
      onDelete: "CASCADE"
    });
  };
  User.prototype.toJSON = function () {
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
  return User;
};
