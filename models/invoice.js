const mongoose = require('mongoose');

//mongodb schema
const customSchema = new mongoose.Schema({
    sellerName : {
        type : 'String',
        required: true
    },
    sellerAddress : { 
        type : 'String',
        required: true
    },
    customerName : { 
        type : 'String',
        required: true
    },
    customerAddress : { 
        type : 'String',
        required: true
    },
    date : {
        type : 'Date',
        default: Date.now
    },
    items : [{
        description : {
            type : 'String',
            required: true
        },
        price : {
            type : 'Number',
            required: true
        }
    }],
    finalPrice : {
        type : 'Number',
        required: true
    },
    terms : {
        type : 'String',
        required: true
    },
    invoiceDescription : {
        type : 'String',
        required: true
    }
});

//exporting schema
module.exports = mongoose.model('Invoice', customSchema);