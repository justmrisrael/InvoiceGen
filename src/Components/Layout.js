import React from "react";
import CustomTextField from "./CustomTextField";
import CustomTextArea from "./CustomTextArea";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerAddress: "",
      sellerName: "",
      customerName: "",
      customerAddress: "",
      invoiceDescription: "",
      termsAndConditions: "",
    };
    this.textFieldHandler = this.textFieldHandler.bind(this);
  }

  textFieldHandler(event) {
    if (event.target.name === "termsAndConditions") {
      this.setState({ termsAndConditions: event.target.value });

      console.log("termsAndConditions:" + this.state.termsAndConditions);
    }

    if (event.target.name === "invoiceDescription") {
      this.setState({ invoiceDescription: event.target.value });

      console.log("invoiceDescription:" + this.state.invoiceDescription);
    }

    if (event.target.name === "sellerName") {
      this.setState({ sellerName: event.target.value });

      console.log("Seller Name:" + this.state.sellerName);
    }

    if (event.target.name === "sellerAddress") {
      this.setState({ sellerAddress: event.target.value });

      console.log("Seller Address:" + this.state.sellerAddress);
    }
    if (event.target.name === "customerName") {
      this.setState({ customerName: event.target.value });

      console.log("Customer Name:" + this.state.customerName);
    }

    if (event.target.name === "customerAddress") {
      this.setState({ customerAddress: event.target.value });

      console.log("Customer Address:" + this.state.customerAddress);
    }
  }

  render() {
    return (
      <div>
        <CustomTextArea
          label="Invoice Description"
          name="invoiceDescription"
          val={this.state.invoiceDescription}
          inputHandler={this.textFieldHandler}
        />
        <CustomTextField
          text="Enter the full name"
          customID="seller-name"
          label="Seller's Name"
          placeholder="First name & Last name"
          name="sellerName"
          val={this.state.sellerName}
          inputHandler={this.textFieldHandler}
        />
        <CustomTextField
          text="Enter the full street address"
          customID="seller-address"
          label="Seller's Address"
          placeholder="Street address"
          name="sellerAddress"
          val={this.state.sellerAddress}
          inputHandler={this.textFieldHandler}
        />
        <CustomTextField
          text="Enter the full name"
          customID="customer-name"
          label="Customer's Name"
          placeholder="First name & Last name"
          name="customerName"
          val={this.state.customerName}
          inputHandler={this.textFieldHandler}
        />
        <CustomTextField
          text="Enter the full street address"
          customID="customer-address"
          label="Customer's Address"
          placeholder="Street address"
          name="sellerName"
          val={this.state.customerAddress}
          inputHandler={this.textFieldHandler}
        />

        <CustomTextArea
          label="Terms and Conditions"
          name="termsAndConditions"
          val={this.state.TermsAndConditions}
          inputHandler={this.textFieldHandler}
        />
      </div>
    );
  }
}
