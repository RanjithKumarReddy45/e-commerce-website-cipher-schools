import React from "react";
import "./HomePageBanner.css";
import banner from "../../images/banner.png";

function HomaPageBanner(){
    return(
        <div className="homepage_banner_container">
            <div className="homepage_banner_left">
               <p>RaviKart's Season Sale</p>
               <p>Minimum 50% OFF</p>
            </div>
            <div className="homepage_banner_right">
                <img src={banner} />

            </div>
        </div>
    )
}

export default HomaPageBanner;