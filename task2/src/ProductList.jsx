import React from "react";
import Card from "./Card";

const products = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Gadget", price: 14.99 },
  { id: 3, name: "Thingamajig", price: 4.99 }
];

function ProductList() {
  return (
    <>
      {products.map(product => (
        <Card key={product.id} title={product.name}>
          Price: ${product.price}
        </Card>
      ))}
    </>
  );
}

export default ProductList;