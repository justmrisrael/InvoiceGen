import React from 'react';
import CustomTextField from './CustomTextField'

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sellerAddress : '',
            sellerName : '',
            customerName : '',
            customerAddress : ''
        }
        this.textFieldHandler = this.textFieldHandler.bind(this);
    }

    textFieldHandler(event){

        if(event.target.name === 'sellerName'){
            this.setState({sellerName : event.target.value});

            console.log('Seller Name:' + this.state.val);
        };

        if(event.target.name === 'sellerAddress'){
            this.setState({sellerAddress : event.target.value});

            console.log('Seller Address:' + this.state.val);
        }
        if(event.target.name === 'customerName'){
            this.setState({customerName : event.target.value});

            console.log('Customer Name:' + this.state.val);
        }

        if(event.target.name === 'customerAddress'){
            this.setState({customerAddress : event.target.value});

            console.log('Customer Address:' + this.state.val);
        }

        
    }

    render() {
        return(
            <div><CustomTextField
                customID='seller-name'
                label="Seller's Name"
                placeholer='Type in the sellers name'
                name='sellerName'
                val={this.state.sellerName}
                inputHandler={this.textFieldHandler}
                text='Enter the full name'/>
            <CustomTextField
                customID='seller-address'
                label="Seller's Address"
                placeholer='Type in the address...'
                name='sellerAddress'
                val={this.state.sellerAddress}
                inputHandler={this.textFieldHandler}
                text="Enter the seller's address"/>
            <CustomTextField
                customID='customer-name'
                label="Customer's Name"
                placeholer="Type in the customer's name"
                name='customerName'
                val={this.state.customerName}
                inputHandler={this.textFieldHandler}
                text='Enter the full name'/>
            <CustomTextField
                customID='seller-address'
                label="Customer's Address"
                placeholer='Type in the customer address'
                name='sellerName'
                val={this.state.customerAddress}
                inputHandler={this.textFieldHandler}
                text='Enter the full address'/></div>

        );
    }
}