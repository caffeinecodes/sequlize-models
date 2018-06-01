"use strict";
import default_schema from "../InitialSchemas/adminSchemas/roleSchema";

export default sequelize => {
  let Role = sequelize.define("Role", default_schema, {
    classMethods: {}
  });
  Role.associate = models => {
    Role.belongsToMany(models.Admin, {
      through: "AdminRoles",
      foreignKey: "role_id",
      otherKey: "admin_id"
    });
  };
  Role.prototype.toJSON = function () {
    let values = this.get({
      plain: true
    });
    delete values.createdAt;
    delete values.updatedAt;
    delete values.status;
    return values;
  };
  return Role;
};
