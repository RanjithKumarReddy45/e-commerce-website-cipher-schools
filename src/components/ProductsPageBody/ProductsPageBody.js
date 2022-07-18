import React, { useEffect, useState } from "react";
import "./ProductsPageBody.css";
import star from "../../images/star.png";

function ProductsPageBody({ ProductCategoryName, setProductCategoryName }) {
  const [ProductDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${ProductCategoryName}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {ProductDetails.map((value, key) => (
        <div className="products_page_container">
          <div className="product_details_container">
            <img src={value.image} />
            <div className="product_details">
              <p className="product_details_title">{value.title}</p>
              <p className="product_details_ratings">
                <button>{value.rating.rate}<img src={star}/></button>
                <span> ( {value.rating.count} ) </span>
              </p>
              <p className="product_details_desc">{value.description}</p>
            </div>
            <div className="product_price">
              <p className="product_price_title">PRICE</p>
              <p className="product_price_value">Rs.{value.price}</p>
              <p className="product_price_text">(Free delivery)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsPageBody;
