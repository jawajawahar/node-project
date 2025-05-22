const users = [
  { id: 1, name: "jawahar", age: 20 },
  { id: 2, name: "Rahaman", age: 21 },
  { id: 3, name: "akeel", age: 22 },
  { id: 4, name: "ijas", age: 23 },
];

exports.getHome = (req, res) => {
  res.json(users);
};

exports.getSingleHome = (req, res) => {
  const id = req.params.id;
  console.log(id);
  let user = users.find((user) => user.id == id);
  console.log(user);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ succsess: "false" });
  }
};

exports.postHome = (req, res) => {
  const { name, age } = req.body;

  const newID = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newID, name, age };
  users.push(newUser);
  res.status(201).json({ success: "true", data: newUser });
};

exports.putHome = (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (user) {
    user.name = name ?? user.name;

    user.age = age ?? user.age;

    res.json({ success: "true", data: user });
  } else {
    res.status(404).json({ success: "false", message: "User Not Found" });
  }
};

exports.deleteHome = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id == id);

  if (index !== -1) {
    const deleteUser = users.splice(index, 1);
    res.json({ success: true, data: deleteUser[0] });
  } else {
    res.status(404).json({ success: "false", message: "User Not Found" });
  }
};
