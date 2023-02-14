// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

//require routers
const indexRouter = require("./routes/index");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const logoutRoute = require("./routes/logout");
const editRoute = require("./routes/edit");
const createPasswordRouter = require("./routes/password_gen");
const editPasswordRouter = require("./routes/editPassword");
const deletePasswordRouter = require("./routes/deletePassword");
const userRouter = require("./routes/users");
const managerRoute = require("./routes/manager");
app.use(function (req, res, next) {
  res.locals.user_id = req.session.user_id;
  res.locals.username = req.session.username;
  next();
});

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
// app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/logout", logoutRoute);
app.use("/manager", managerRoute);
app.use("/edit", editRoute);
// app.use("/", loginRouter);
// app.use('/login', loginRouter);
// app.use('/logout', logoutRoute);
// app.use('/password_gen', createPasswordRoutes);
// app.use('/deletePassword', deletePasswordRoutes);
// app.use('/editPassword', editPasswordRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

//pass the routers to the Express app as middlware

app.get("/", (req, res) => {
  res.render("index");
});

// GET route
// loginRoutes.get("/login", (req, res) => {
//   const templateVars = { value: false };
//   res.render("login", templateVars);
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
