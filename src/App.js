import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import ProductList from "./components/products/ProductList";
import CartList from "./components/cart/CartList";
import { data } from "./data";
class App extends React.Component {
  state = {
    products: data.rows,
    cartItems: []
  };

  addToCart = item => {
    const inCart = this.state.cartItems.find(
      product => product.product_id === item.product_id
    );
    const currentCartItems = inCart
      ? this.state.cartItems
      : [...this.state.cartItems, item];

    this.setState({ cartItems: currentCartItems }, () => {
      console.log(this.state.cartItems);
    });
  };

  removeFromCart = item => {
    const currentCartItems = this.state.cartItems.filter(
      product => product.product_id !== item.product_id
    );

    this.setState({ cartItems: currentCartItems }, () => {
      console.log(this.state.cartItems);
    });
  };

  // localhost:3000

  render() {
    return (
      <Grid container spacing={3}>
        <Grid xs={3}>
          <CartList
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
          />{" "}
        </Grid>{" "}
        <Grid xs={9}>
          <ProductList
            products={this.state.products}
            addToCart={this.addToCart}
          />{" "}
        </Grid>{" "}
      </Grid>
    );
  }
}

export default App;
