import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default class CartItem extends Component {
  render() {
    const { productInfo } = this.props;
    const { name, price } = productInfo;
    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Typography className={classes.productName}>
              {name} | USD {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              contained
              color="secondary"
              onClick={() => {
                this.props.removeFromCart(productInfo);
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
        <p />
      </div>
    );
  }
}

const classes = { productName: { fontSize: 20, fontWeight: "bold" } };
