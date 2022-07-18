import React from "react";
import "./OrdersPage.css";
import NavBar from "../../components/NavBar/NavBar";
import OrdersPageBody from "../../components/OrdersPageBody/OrdersPageBody";

function OrdersPage(){
    return(
        <>
        <NavBar ShowSignInButton={false} ShowHomeButton={true} />
        <OrdersPageBody />
        </>
    )
}

export default OrdersPage;