import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CartItem from "./CartItem";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
export default class CartList extends Component {
  render() {
    const { cartItems, removeFromCart } = this.props;
    return (
      <Container style={{ backgroundColor: "#f4f4f4", paddingBottom: 20 }}>
        <Typography
          color="black"
          gutterBottom
          component="h2"
          style={{ marginTop: 20, fontSize: 20 }}
        >
          {cartItems.length
            ? `${cartItems.length} items`
            : "Your cart is empty"}{" "}
        </Typography>

        {cartItems.map(product => {
          return (
            <CartItem
              key={product.product_id}
              productInfo={product}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </Container>
    );
  }
}

const classes = {
  root: {
    padding: 20
  }
};
