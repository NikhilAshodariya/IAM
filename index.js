const Permission = require("./data/permission_data.js");
const Role = require("./data/role_data.js");
const RolePermissionData = require("./data/roles_permission_data.js");
const User = require("./data/user_data.js");
const UsersRolesData = require("./data/users_roles_data.js");

const getUserFunctions = () => {
    let obj = {};
    obj["getAllUsers"] = User.getAllUsers;
    obj["createUser"] = User.createUser;
    obj["getUserByEmail"] = User.getUserByEmail;
    obj["removeUser"] = User.removeUser;
    return obj;
};

const getRoleFunctions = () => {
    let obj = {};
    obj["getAllRoles"] = Role.getAllRoles;
    obj["getRoleByName"] = Role.getRoleByName;
    obj["createRole"] = Role.createRole;
    obj["deleteRole"] = Role.deleteRole;
    return obj;
};

const getPermissionFunctions = () => {
    let obj = {};
    obj["getAllPermissions"] = Permission.getAllPermissions;
    obj["getPermissionByName"] = Permission.getPermissionByName;
    obj["createPermission"] = Permission.createPermission;
    obj["deletePermission"] = Permission.deletePermission;
    return obj;
};

const getRolePermissionFunctions = () => {
    let obj = {};
    obj["findByRoleName"] = RolePermissionData.findByRoleName;
    obj["assignPermissionToRole"] = RolePermissionData.assignPermissionToRole;
    obj["unassignPermissionToRole"] = RolePermissionData.unassignPermissionToRole;
    return obj;
};


const getUsersRolesFunctions = () => {
    let obj = {};
    obj["findByUserName"] = UsersRolesData.findByUserName;
    obj["assignRoleToUser"] = UsersRolesData.assignRoleToUser;
    obj["unassignRoleToUser"] = UsersRolesData.unassignRoleToUser;
    return obj;
};

module.exports = {
    ...getUserFunctions(),
    ...getRoleFunctions(),
    ...getPermissionFunctions(),
    ...getRolePermissionFunctions(),
    ...getUsersRolesFunctions()
};