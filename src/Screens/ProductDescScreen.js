import React from "react";
import products from "../Products";

const ProductDescScreen = ({ match }) => {
  const productId = match.params.id;

  const product = products.find((product) => product.id == productId);

  console.log(product);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-2 m-2">
            <h1>{product.name}</h1>
            <img
              src={product.image}
              className="img-fluid m-3 bigimg"
              alt={product.name}
            />
            <p>{product.description}</p>
          </div>
        </div>

        <div className="col-md-6 text-left">
          <div className="m-2">
            <h1>Price : {product.price} /-</h1>

            <hr />

            <h1> Select Quantity </h1>
            <select style={{ float:'left'}}>
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <br />

            <hr />

            <button className="btn btn-dark">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescScreen;
