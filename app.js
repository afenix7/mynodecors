var express = require("express");
var proxy = require("http-proxy-middleware");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(
  "/",
  proxy({ target: "http://www.baidu.com", changeOrigin: true })
);
app.listen(3011);
