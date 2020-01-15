var mongoose = require('mongoose');

const CitizenSchema = mongoose.Schema({
    SoCM: String,
    TenHK: String,
    NS: Date,
    QQ: String,
    T_TRU: String,
    NgayKS: Date,
    NoiCap: String,
});

module.exports = CitizenSchema