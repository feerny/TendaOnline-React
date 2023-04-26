import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  useEffect(() => {
    if (props.linkNavActivo === "nav-link-1") {
      document.getElementById("nav-link-1").classList.add("active");
    } else if (props.linkNavActivo === "nav-link-2") {
      document.getElementById("nav-link-2").classList.add("active");
    } else if (props.linkNavActivo === "nav-link-3") {
      document.getElementById("nav-link-3").classList.add("active");
    }
  }, [props.linkNavActivo]);
  const clickLink = (id) => {
    if (id === "nav-link-1") {
      document.getElementById("nav-link-1").classList.add("active");
    } 
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            style={{ marginRight: "5px" }}
            width="35"
            className="d-inline-block align-text-top"
            src="https://fakestoreapi.com/icons/logo.png"
            alt="LogoFakeStoreApi"
          />
          Tiendas Pipe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-underline nav-fill me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                onClick={() => clickLink("nav-link-1")}
                id="nav-link-1"
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
          </ul>
          <h2 >
              <i class="bi bi-cart-fill"></i>
            </h2>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
