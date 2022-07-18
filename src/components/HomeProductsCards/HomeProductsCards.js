import React, {useState, useEffect} from "react";
import "./HomeProductsCards.css";
import electronics from "../../images/Categories/electronics.jpg"
import jwellery from"../../images/Categories/jwellery.jpg";
import mensclothings from"../../images/Categories/mensclothings.jpg";
import womensclothings from"../../images/Categories/womensclothings.jpg";
import { useNavigate } from "react-router-dom";

function HomeProductsCards({ProductCategoryName, setProductCategoryName}) {

  
    // const [categoryName, setcategoryName] = useState([]);

    // useEffect(() =>{
    //     fetch("https://fakestoreapi.com/products/categories/")
    // .then(res => res.json())
    // .then(data => setcategoryName(data))
    // .then(error => console.log(error))

    // },[])

     const categoryData = [
        {
            image: electronics,
            title: "electronics"
        },
        {
            image: jwellery,
            title: "jewelery"
        },
        {
            image: mensclothings,
            title: "men's clothing"
        },
        {
            image: womensclothings,
            title: "women's clothing"
        },


     ]

     const navigate = useNavigate();
     function goToProductPage(param) {
       navigate(`/products/${param}`);
       setProductCategoryName(param);
     }

  return (
    <div className="cards_section_container">
      {/* <p className="cards_section_container_title">Products Categories</p> */}
      <div className="cards_container">
      
        {categoryData.map((value,key) =>(
           <div className="cards_box_container" onClick={()=>goToProductPage(value.title)}>
           <img src={value.image} />
           <p>{value.title}</p>
           </div>

          ) )}
      
      </div>
    </div>
  );
}

export default HomeProductsCards;
