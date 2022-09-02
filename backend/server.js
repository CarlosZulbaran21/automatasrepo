const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const config = require("./src/config/config");
const routerApi = require("./src/routes");

const port = config.port;
//settings
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(express.static("public"));
// // routes
routerApi(app);

//middlewares

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
