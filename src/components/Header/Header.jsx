import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";

import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const routeMenu = [
  { pathName: "Home", routeLink: "/home" },

  { pathName: "Products", routeLink: "/products" },
];

const Header = () => {
  const navigate = useNavigate();
  const handleRoute = (path) => {
    navigate(path);
  };

  const [isProductSaved, setIsProductSaved] = useState(false);

  const cartCount = useSelector(state => state.ecart.cartCount);
  const cartItem = useSelector(state => state.ecart.cartItem);

  const handleProductsSubmit = async () => {
    let confirmResponse = confirm("Are you sure");
    console.log(confirmResponse);

    if (confirmResponse) {
      alert("Prodcuts saved to cart");
      setIsProductSaved(true);
    }
  };

  const handleProductBuy = async () => {
    console.log("buy clicked");    
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background: "linear-gradient(90deg, rgba(153,172,143,1) 0%, rgba(165,194,203,1) 0%, rgba(240,240,243,1) 100%, rgba(84,83,100,1) 100%, rgba(155,155,186,1) 100%)"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"  style={{color:'black' , textShadow : '1px 1px white' , fontSize:'25px' , fontWeight : 'bold'}}>
          Ecart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routeMenu.map((item) => (
              <Fragment key={item.pathName}>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    role="button"
                    onClick={() => handleRoute(item.routeLink)
                    }
                    style={{color:'black' , textShadow : '1px 1px white' , fontSize:'18px' , fontWeight : 'bold'}}
                  >
                    {item.pathName}
                  </a>
                </li>
              </Fragment>
            ))}
          </ul>

          <div className="m-4" style={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>

              <div
                className="cart-count"
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-10px",
                  fontSize: "25px",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </div>
            </div>

          <div  style={{ marginRight: "200px" }}>
          
            {isProductSaved ? (
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={handleProductBuy}
              >
                Buy
              </button>
            ) : (
              <button
                className="btn"
                type="submit"
                onClick={handleProductsSubmit}
                style={{backgroundColor : 'darkgreen' , color:'white'}}
              >
                Save
              </button>
            )}
             
             <Modal receivedCartData = {cartItem}/>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
