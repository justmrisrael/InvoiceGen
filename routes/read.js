//dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

//routes
router.get('/all', (request, response )=>{

    invoiceModel.find((err, docs)=>{
        if (err) {
            console.log('ERROR' + err);
            response.status(500).json({message: 'Problems with reading information from the database'});
        }else{
            //citerus paribus
            console.log('All invoices were found in the database!');
            response.status(200).json(docs);
        }
    });

});

//exporting the contents of this file
module.exports = router;