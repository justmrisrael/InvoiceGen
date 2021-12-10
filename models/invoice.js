const mongoose = require('mongoose');

//mongodb schema
const customSchema = new mongoose.Schema({
    sellerName : {
        type : 'string',
        required: true
    },
    sellerAddress : { 
        type : 'string',
        required: true
    },
    customerName : { 
        type : 'string',
        required: true
    },
    customerAddress : { 
        type : 'string',
        required: true
    },
    date : {
        type : 'date',
        required: true
    },
    items : [{
        description : {
            type : 'string',
            required: true
        },
        price : {
            type : 'number',
            required: true
        }
    }],
    finalPrice : {
        type : 'number',
        required: true
    },
    terms : {
        type : 'string',
        required: true
    },
    inivoiceDescription : {
        type : 'String',
        required: true
    }
});

//exporting schema
module.exports = mongoose.model('Invoice', customSchema);