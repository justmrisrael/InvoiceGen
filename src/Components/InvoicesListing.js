import React from "react";

export default class InvoicesListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invoicesData: [],
    };
  }

  componentDidMount() {
    //auto runtime
    fetch("/api/readinvoice/all", {
      method: "GET",
    }).then((response) => {
        if (response.ok) {
          //get was successful
          return response.json();
          console.log(response.json());
        } else {
          //get was not successful
          console.log("Error reading invoice");
        }
      }).then((responseAsJson) => {
        let invoicesInfo = [];
        responseAsJson.map((invoice, index) => {
          invoicesInfo.push(
              {
                id: invoice._id,
                description: invoice.invoiceDescription,
            }
          );
        });
        this.setState((state, props)=>{
            return {
                invoicesData : state.invoicesData.concat(invoicesInfo)
            }
        });

        console.log(this.state.invoicesData);
      });
  }

  render() {
    return (
      //placeholder
      <h1>Hello from Invoices Listing</h1>
    );
  }
}
