var mongoose = require('mongoose');

var customerSchema = mongoose.Schema ({
    name: {type:String},
    age: {type:number}
})

module.exports = mongoose.exports('customer',customerSchema)