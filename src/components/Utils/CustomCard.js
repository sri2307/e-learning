import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CustomCard = (props) => {
  const color = props.color;
  return (
    <div>
      <Card
        style={{
          backgroundColor: color,
          width: "200px",
          height: "100px",
          color: "white",
          fontWeight: "bold",
        }}>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.count}</CardSubtitle>
          {/* <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomCard;
