"use strict";
//assigning multiple roles to a type
var Roles;
(function (Roles) {
    Roles["user"] = "User";
    Roles["admin"] = "Admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "ABCD",
    email: "abcd@gmail.com",
    password: "qwerty",
    role: Roles.admin,
};
const user2 = {
    name: "ABCD",
    email: "abcd@gmail.co",
    password: "qwer",
    role: Roles.user,
};
const isAdmin = (user) => {
    const { email, role } = user;
    return role === Roles.admin
        ? `${email} is allowed to edit`
        : `${email} is not allowed to edit`;
};
console.log(isAdmin(user2));
