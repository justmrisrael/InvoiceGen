import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CustomTextField from "./CustomTextField";

export default class InputDescriptionAndPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CustomTextField
              customId="itemDescription"
              label="Item Description"
              name="itemDescription"
              placeholder="Enter a short description"
              val={this.props.descriptionVal}
              inputHandler={this.props.customHandler}
            />
          </Col>
          <Col>
            <CustomTextField
              customId="itemPrice"
              label="Item Price"
              name="itemPrice"
              placeholder="Enter the Price"
              val={this.props.priceVal}
              inputHandler={this.props.customHandler}
            />
          </Col>
          <Col>
            <Button
              size="md"
              variant="primary"
              style={{ marginTop: "2.5em" }}
              onClick={ this.props.buttonHandler }>
                Submit
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
