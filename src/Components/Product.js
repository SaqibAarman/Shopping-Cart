import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const Product = ({ item }) => {
  return (
    <div className="col-md-3 m-3 card p-2 text-left">
      <div>
        <Link to={`product/${item.id}`}>
          <img src={item.image} className="img-fluid" alt={item.name} />
          <h1>{item.name}</h1>
          <Rating
            style={{
              right: "90px",
            }}
            initialValue={item.rating}
            size="24px"
            readonly
          />
          <br />
          <h1>Price : {item.price} /-</h1>
        </Link>
      </div>
    </div>
  );
};

export default Product;
