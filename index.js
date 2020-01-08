const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var conHaNoi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ha_noi"
});
var conTpHCM = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TpHCM"
});
conHaNoi.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
conTpHCM.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", function(req, res) {
  res.render("check");
});

app.get("/dangky", function(req, res) {
  res.render("index");
});

app.post("/insert", (req, res, next) => {
  console.log("data", req.body);
  const SCM = "031098" + Math.floor(Math.random() * 1000000);
  var sql =
    "INSERT INTO citizen (SoCM, TenHK, NS, QQ, T_TRU, NgayKS, NoiCap) VALUES ('" +
    SCM +
    "','" +
    req.body.TenHK +
    "','" +
    req.body.NS +
    "','" +
    req.body.QQ +
    "','" +
    req.body.T_TRU +
    "','" +
    req.body.NS +
    "','" +
    req.body.NoiCap +
    "')";
  console.log("sql", sql);
  conHaNoi.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
var server = app.listen(6969, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
