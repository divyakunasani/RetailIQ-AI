const fs = require("fs");
const path = require("path");

const storagePath = path.join(__dirname, "..", "data", "users.json");

const ensureStore = () => {
  if (!fs.existsSync(storagePath)) {
    fs.mkdirSync(path.dirname(storagePath), { recursive: true });
    fs.writeFileSync(storagePath, "[]", "utf8");
  }

  return JSON.parse(fs.readFileSync(storagePath, "utf8"));
};

const saveStore = (users) => {
  fs.mkdirSync(path.dirname(storagePath), { recursive: true });
  fs.writeFileSync(storagePath, JSON.stringify(users, null, 2), "utf8");
};

const findUserByEmail = (email) => {
  const users = ensureStore();
  return users.find((user) => user.email === email) || null;
};

const createUser = ({ name, email, passwordHash }) => {
  const users = ensureStore();
  const user = {
    id: Date.now(),
    name,
    email,
    password_hash: passwordHash,
    created_at: new Date().toISOString()
  };
  users.push(user);
  saveStore(users);
  return user;
};

module.exports = {
  findUserByEmail,
  createUser
};
