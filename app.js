var express = require("express");
var proxy = require("http-proxy-middleware");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(
  "/",
  proxy({ target: "http://10.200.37.197:8080", changeOrigin: true })
);
app.listen(3011);
