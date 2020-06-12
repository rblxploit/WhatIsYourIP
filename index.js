const express = require("express");
const app = express();

app.get("/", function (req, res) {
  var ip =
    (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  res.send(ip);
});

app.listen(3000, () => {
  console.log("Server started at port 3000.");
});
