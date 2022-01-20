import React from "react";
import InvoicesTable from "./InvoicesTable";
import DialogWindow from "./DialogWindow";

export default class InvoicesListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invoicesData: [],
      show: false,
      title: "",
      content: "",
    };
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler(invoiceId) {
    fetch("/api/deleteinvoice/" + invoiceId, {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        //removed successfully
        
        this.setState({
          show: true,
          title: "Success!",
          content: "Invoice deleted successfully",
        })
      } else {
        //something was wrong
        this.setState({
          show: true,
          title: "Error!",
          content: "Problems removing invoice!",
        });
      }
    })
    console.log("Delete invoice:" + invoiceId);
  }

  componentDidMount() {
    //auto runtime
    fetch("/api/readinvoice/all", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          //get was successful
          return response.json();
          console.log(response.json());
        } else {
          //get was not successful
          console.log("Error reading invoice");
        }
      })
      .then((responseAsJson) => {
        let invoicesInfo = [];
        responseAsJson.map((invoice, index) => {
          invoicesInfo.push({
            id: invoice._id,
            description: invoice.invoiceDescription,
          });
        });
        this.setState((state, props) => {
          return {
            invoicesData: state.invoicesData.concat(invoicesInfo),
          };
        });

        console.log(this.state.invoicesData);
      });
  }

  render() {
    return (
      <div>
        <InvoicesTable
          invoicesData={this.state.invoicesData}
          handleDelete={this.deleteHandler}
        />
        <DialogWindow
          show={this.state.show}
          title={this.state.title}
          content={this.state.content}
          closeHandler={this.closeWindow}
        />
      </div>
    );
  }
}
