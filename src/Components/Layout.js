import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CustomTextField from "./CustomTextField";
import CustomTextArea from "./CustomTextArea";
import ProductsAndPrices from "./ProductsAndPricesListing";
import FinalPrice from "./FinalPrice";
import DescriptionAndPrice from "./InputDescriptionAndPrice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DialogWindow from "./DialogWindow";
import CustomCard from "./CustomCard";

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
      descriptionVal: "",
      priceVal: "",
      itemsListing: [],
      show: false,
      title: "",
      content: "",
    };
    this.textFieldHandler = this.textFieldHandler.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  closeWindow() {
    this.setState({
      show: false,
    });
    console.log("close dialog box");
  }

  handleSubmit(event) {
    //final price calculation
    const currentItems = this.state.itemsListing;
    let finalPrice = 0;
    currentItems.map((product, index) => {
      finalPrice += product.price;
    });

    //sales invoice information
    const salesInvoice = {
      //information to be stored in the database
      sellerName: this.state.sellerName,
      sellerAddress: this.state.sellerAddress,
      customerName: this.state.customerName,
      customerAddress: this.state.customerAddress,
      items: this.state.itemsListing,
      finalPrice: finalPrice,
      terms: this.state.termsAndConditions,
      invoiceDescription: this.state.invoiceDescription,
    };

    //store object in the database using the fetch method
    //fetch is a promise
    fetch("/api/createinvoice", {
      method: "POST",
      body: JSON.stringify(salesInvoice),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        //if successful
        this.setState({
          show: true,
          title: "Success!",
          content: "The invoice was created successfully",
        });
        console.log("the invoice was successfully saved");
      } else {
        //if not successful
        this.setState({
          show: true,
          title: "Error!",
          content: "Error creating the invoice, Try again!",
        });
        console.log("the invoice was not saved");
      }
    });

    event.preventDefault();
    console.log("you want to create a new sales invoice");
  }

  buttonClick() {
    this.setState((state, props) => {
      const currentArrary = this.state.itemsListing;
      //add items to the array of items in the item listing
      return {
        itemsListing: currentArrary.concat([
          {
            description: state.descriptionVal,
            price: parseFloat(state.priceVal),
          },
        ]),
      };
    });

    console.log("You want to add an item to the listing?");
  }

  /////////////////////////*Text fields handler */////////////////////////////
  textFieldHandler(event) {
    if (event.target.name === "itemDescription") {
      this.setState({ descriptionVal: event.target.value });

      console.log("Item Description:" + this.state.descriptionVal);
    }

    if (event.target.name === "itemPrice") {
      this.setState({ priceVal: event.target.value });

      console.log("Item Price:" + this.state.priceVal);
    }

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
      <Form onSubmit={this.handleSubmit}>
        <Container>
          <Row style={{ marginTop: "1em" }}>
            <Col>
              <CustomCard head="Invoice Description">
                <CustomTextArea
                  label="Invoice Description"
                  name="invoiceDescription"
                  val={this.state.invoiceDescription}
                  inputHandler={this.textFieldHandler}
                />
              </CustomCard>
            </Col>
          </Row>
          {/* <div style={{ marginTop: "15px", height: "10px", width: "10px" }} /> */}
          <Row style={{ marginTop: "1em" }}>
            <Col>
              <CustomCard head="Seller's Information">
                {/* Seller Name */}
                <CustomTextField
                  text="Enter the full name"
                  customID="seller-name"
                  label="Seller's Name"
                  placeholder="First & Last name"
                  name="sellerName"
                  val={this.state.sellerName}
                  inputHandler={this.textFieldHandler}
                  className="spacer"
                />
                {/* Seller Address */}
                <CustomTextField
                  text="Enter the full street address"
                  customID="seller-address"
                  label="Seller's Address"
                  placeholder="Street address"
                  name="sellerAddress"
                  val={this.state.sellerAddress}
                  inputHandler={this.textFieldHandler}
                />
              </CustomCard>
            </Col>
            <Col>
              <CustomCard head="Customer's Information">
                {/* Customer Name */}
                <CustomTextField
                  text="Enter the full name"
                  customID="customer-name"
                  label="Customer's Name"
                  placeholder="First name & Last name"
                  name="customerName"
                  val={this.state.customerName}
                  inputHandler={this.textFieldHandler}
                />
                {/* Customer Address */}
                <CustomTextField
                  text="Enter the full street address"
                  customID="customer-address"
                  label="Customer's Address"
                  placeholder="Street address"
                  name="customerAddress"
                  val={this.state.customerAddress}
                  inputHandler={this.textFieldHandler}
                />
              </CustomCard>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col>
              <CustomCard head="items/Services Purchased">
                <ProductsAndPrices itemsListing={this.state.itemsListing} />
                <DescriptionAndPrice
                  descriptionVal={this.state.descriptionVal}
                  priceVal={this.state.priceVal}
                  customHandler={this.textFieldHandler}
                  buttonHandler={this.buttonClick}
                />
              </CustomCard>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomCard head="Final Price">
                <FinalPrice itemsListing={this.state.itemsListing} />
              </CustomCard>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col>
              <CustomCard head="Term's and Conditions">
                <CustomTextArea
                  label="Terms and Conditions"
                  name="termsAndConditions"
                  val={this.state.TermsAndConditions}
                  inputHandler={this.textFieldHandler}
                />
              </CustomCard>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col>
              <Card>
                <Card.Body>
                  <Button
                    style={{ marginTop: "10px" }}
                    type="submit"
                    variant="primary"
                    size="lg"
                  >
                    Create a sales invoice
                  </Button>
                </Card.Body>
              </Card>
              {/* button to add item to the database */}
            </Col>
          </Row>
        </Container>

        <DialogWindow
          show={this.state.show}
          title={this.state.title}
          content={this.state.content}
          closeHandler={this.closeWindow}
        />
      </Form>
    );
  }
}
