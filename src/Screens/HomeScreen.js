import React from "react";
import Product from "../Components/Product";
import products from "../Products";

const HomeScreen = () => {
  return (
    <div>
      <div className="row justify-content-center">
        {products.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
