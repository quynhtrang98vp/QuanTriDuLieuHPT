var mongoose = require('mongoose');

const uriTpHCM = "mongodb+srv://longvu:vbn693178@cluster0-0i6qz.mongodb.net/tpHCM?retryWrites=true&w=majority";

// mongoose.connect(uriTpHCM, { useNewUrlParser: true, useUnifiedTopology: true });
const tpHCM = mongoose.createConnection(uriTpHCM, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = exports = tpHCM;