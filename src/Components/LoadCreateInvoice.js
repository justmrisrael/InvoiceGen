import React from "react";
import Card from "react-bootstrap/Card";
import Layout from "./Layout";

export default function LoadCreateInvoice(props) {
  return (
    <div className="jumbotron">
      <Card bg="dark" text="white">
        <Card.Header as="h4">Create Invoice Form</Card.Header>
        <Card.Body style={{ color: "black" }}>
          <Layout />
        </Card.Body>
      </Card>
    </div>
  );
}
