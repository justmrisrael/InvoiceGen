//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.delete('/:invoiceId', (request, response )=>{

    invoiceModel.deleteOne({
        _id: request.params.invoiceId
    },(err)=>{
        if(err){
            //problems when removing invoice
            console.log('Error' + err);
            response.status(500).json({message: 'Problems when removing invoice!'});
        }else{
            //everything works
            console.log('Success');
            response.status(200).json({message: 'Successfully removed invoice!'});
        }
    });
    
});

//exporting the contents of this file
module.exports = router;