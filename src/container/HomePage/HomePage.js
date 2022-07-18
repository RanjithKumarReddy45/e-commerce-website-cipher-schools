import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import HomeProductsCards from "../../components/HomeProductsCards/HomeProductsCards";
import Footer from "../../components/Footer/Footer";

function HomePage({ProductCategoryName, setProductCategoryName}) {
    
  return (
    <div>
      <NavBar ShowHomeButton={false} />
      {/* here we not not sending any value for ShowSignInButton,
             so it will become undefined and signin button will appear in the nav bar of landing page */}
      <HomePageBanner />
      <HomeProductsCards
        ProductCategoryName={ProductCategoryName}
        setProductCategoryName={setProductCategoryName}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
