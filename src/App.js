import "./App.css";
import { useState } from "react";
import HomePage from "./container/HomePage/HomePage";
import ProductsPage from "./container/ProductsPage/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./container/SignInPage/SignInPage";
import OrdersPage from "./container/OrdersPage/OrdersPage";
import KartPage from "./container/KartPage/kartPage";


function App() {
  const isuserLoggedin = false;
  const [ProductCategoryName, setProductCategoryName] = useState("");
  

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                ProductCategoryName={ProductCategoryName}
                setProductCategoryName={setProductCategoryName}
              />
            }
          />

          <Route
            path="/products/:id"
            element={
              <ProductsPage
                ProductCategoryName={ProductCategoryName}
                setProductCategoryName={setProductCategoryName}
              />
            }
          />
           <Route path="/sign-in" element={<SignInPage /> } />
           <Route path="/orders" element={<OrdersPage /> } />
           <Route path="/my-kart" element={<KartPage /> } />
           
        </Routes>
        
      </div>
    </BrowserRouter>
   
    </>
  );
}

export default App;
