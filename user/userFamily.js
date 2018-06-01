"use strict";
import default_schema from "../InitialSchemas/userSchemas/userFamilySchema";

export default sequelize => {
  let UserFamily = sequelize.define("UserFamily", default_schema, {
    classMethods: {}
  });
  UserFamily.associate = models => {
    UserFamily.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "CASCADE"
    });
  };
  UserFamily.prototype.toJSON = function () {
    let values = this.get({
      plain: true
    });
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return UserFamily;
};
