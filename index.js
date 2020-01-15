const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const haNoiDB = require("./database/hanoiDB")
const tpHcmDB = require("./database/tpHcmDB")
const CitizenSchema = require("./database/schema/CitizenSchema")


app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

haNoiDB.on("error", console.error.bind(console, "MongoDB Connection Error>> : "));
haNoiDB.once("open", function () {
  console.log("client MongoDB Connection ok!");
});

tpHcmDB.on("error", console.error.bind(console, "MongoDB Connection Error>> : "));
tpHcmDB.once("open", function () {
  console.log("client MongoDB Connection ok!");
});


app.get("/", function (req, res) {
  res.render("check");
});

app.get("/dangky", function (req, res) {
  res.render("index");
});

app.post("/insert", (req, res, next) => {
  console.log("data", req.body);
  const SCM = "031098" + Math.floor(Math.random() * 1000000);

  const CitizenHaNoi = haNoiDB.model('Citizen', CitizenSchema)
  const CitizenTpHCM = tpHcmDB.model('Citizen', CitizenSchema)
  if (req.body.NoiCap == "Hà Nội") {
    let citizenHanoi = new CitizenHaNoi({
      SoCM: SCM,
      TenHK: req.body.TenHK,
      NS: req.body.NS,
      QQ: req.body.QQ,
      T_TRU: req.body.T_TRU,
      NgayKS: req.body.NgayKS,
      NoiCap: req.body.NoiCap
    });
    citizenHanoi.save(function (err, citizen) {
      if (err) return console.error(err);
      console.log(citizen.SoCM + " saved to citizenHanoi collection.");
    });
  } else if (req.body.NoiCap == "TP Hồ Chí Minh") {
    let citizenTpHCM = new CitizenTpHCM({
      SoCM: SCM,
      TenHK: req.body.TenHK,
      NS: req.body.NS,
      QQ: req.body.QQ,
      T_TRU: req.body.T_TRU,
      NgayKS: req.body.NgayKS,
      NoiCap: req.body.NoiCap
    });
    citizenTpHCM.save(function (err, citizen) {
      if (err) return console.error(err);
      console.log(citizen.SoCM + " saved to citizenTpHCM collection.");
    });
  }

});
var server = app.listen(6969, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
