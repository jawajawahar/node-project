const express = require("express");
const homeRoutes = require("./routes/home.routes");

const app = express();
const PORT = 8080;

app.use(express.json());
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/ejs", (req, res) => {
  let users = ["akkel", "arsath", "ijas", "rila"];
  res.render("index", { users });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use("/", homeRoutes);

// app.get("/", (req, res) => {
//   //   res.send("<h1>This is heading</h1><p>Hello World</p>");
//   res.json({
//     success: "true",
//   });
// });

// // app.post("/", (req, res) => {
// //   //   res.send("<h1>This is heading</h1><p>Hello World</p>");
// //   res.json({
// //     method: "POST",
// //   });
// // });

// app.post("/", (req, res) => {
//   const data = req.body;

//   console.log(data);
//   res.status(201).json({ success: "true" });
// });

app.listen(PORT, () => {
  console.log(`server is running successfully on http://localhost:${PORT}/`);
});
