//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');


//routes
router.put('/:invoiceId', (request, response )=>{
    //request.body contains the information that is updated from the web browser.
    const input = request.body;

    invoiceModel.updateOne({
        _id: request.params.invoiceId
    },{
        sellerName : input.sellerName,
        sellerAddress : input.sellerAddress,
        customerName : input.customerName,
        customerAddress : input.customerAddress,
        items : input.items,
        finalPrice : input.finalPrice,
        terms : input.terms,
        invoiceDescription : input.invoiceDescription
    },(err, result)=>{
        if(err){
            //if problems when updating the information
            console.log('ERROR' + err);
            response.status(500).json({message: 'Problems when updating the information'});
        }else{
            //can update
            console.log('The invoice was updated successfully');
            response.status(200).json({message: 'The invoice was updated successfully'});
        }
    });

});

//exporting the contents of this file
module.exports = router;