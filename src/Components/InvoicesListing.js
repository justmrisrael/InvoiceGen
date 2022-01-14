import React from "react";

export default class InvoicesListing extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //auto runtime
        fetch("api.readinvoice/all",{
            method: "GET",
        }).then((response) => {
            if(response.ok){
                //get was successful
                console.log(response.json());
            }else{
                //get was not successful
                console.log("Error reading invoice");
            }
        })
    }

    render() {
        return(
            //placeholder
            <h1>Hello from Invoices Listing</h1>
        )
    }
}
