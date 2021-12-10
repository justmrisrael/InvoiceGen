//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.post('/', (request, response )=>{
    const input = request.body;

    const newDocument = new invoiceModel({
        sellerName : input.sellerName,
        sellerAddress : input.sellerAddress,
        customerName : input.customerName,
        customerAddress : input.customerAddress,
        items : input.items,
        finalPrice : input.finalPrice,
        terms : input.terms,
        invoiceDescription : input.invoiceDescription
    });

    //saving the information to the database
    newDocument.save((err, doc)=>{
        if(err){
            //if something went wrong log a message to the console
            console.log('Error' + err);
            response.status(500).json({message: 'Could not save information to the database!'});
        }else{
            console.log('Success! All data has been saved!');
            response.status(200).json({message: 'Successfully saved information to the database!'});
        }
    });
});

//exporting the contents of this file
module.exports = router;