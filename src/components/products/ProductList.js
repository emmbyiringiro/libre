import React, { Component } from "react";
import Product from "./Product";

import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <GridList
        cellHeight={340}
        spacing={20}
        className={classes.gridList}
        cols={4}
      >
        {products.map(product => {
          return (
            <GridListTile key={product.product_id} cols={1}>
              <Product productInfo={product} addToCart={this.props.addToCart} />
            </GridListTile>
          );
        })}
      </GridList>
    );
  }
}

const classes = {
  root: {
    margin: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  gridList: {
    width: 500,
    height: 450
  }
};
