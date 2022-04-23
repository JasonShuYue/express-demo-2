const express = require("express");
const app = express();
const users = require("./routes/index");

app.use("/users", users);

app.listen(3000, () => {
  console.log("listen 成功！");
});
