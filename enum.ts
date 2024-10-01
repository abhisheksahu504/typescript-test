//assigning multiple roles to a type
enum Roles {
  user = "User",
  admin = "Admin",
}
type Detail = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: Detail = {
  name: "ABCD",
  email: "abcd@gmail.com",
  password: "qwerty",
  role: Roles.admin,
};
const user2: Detail = {
  name: "ABCD",
  email: "abcd@gmail.co",
  password: "qwer",
  role: Roles.user,
};

const isAdmin: (user: Detail) => string = (user: Detail): string => {
  const { email, role } = user;
  return role === Roles.admin
    ? `${email} is allowed to edit`
    : `${email} is not allowed to edit`;
};
console.log(isAdmin(user2));
