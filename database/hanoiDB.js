var mongoose = require('mongoose');

const uriHanoi = "mongodb+srv://JoachVu:vbn693178@cluster0-mlqtc.mongodb.net/hanoi?retryWrites=true&w=majority";

// mongoose.connect(uriHanoi, { useNewUrlParser: true, useUnifiedTopology: true });
const hanoiDB = mongoose.createConnection(uriHanoi, { useNewUrlParser: true, useUnifiedTopology: true })
module.exports = exports = hanoiDB;