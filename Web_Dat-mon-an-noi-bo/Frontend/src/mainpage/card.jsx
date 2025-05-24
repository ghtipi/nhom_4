import React from "react";
import "./card.css";
import noImage from "../assets/noimage.png"; // Fixed variable name casing

function Card() {
  // Component name should be capitalized
  return (
    <div className="container">
      {" "}
      {/* Use className instead of class */}
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card product-card">
            <img
              src={noImage} // Directly use the imported image
              alt="Product" // More descriptive alt text
              className="card-img-top product-image" // Better class naming
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = noImage; // Fallback to noImage if original fails
              }}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title product-title mb-0">Product Name</h5>
                <span className="product-price">$99.99</span>
              </div>
              <p className="card-text product-description">
                A brief description of the product goes here. It should be
                concise yet informative.
              </p>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="rating">
                  {[...Array(4)].map((_, i) => (
                    <i
                      key={`full-${i}`}
                      className="fas fa-star text-warning"
                    ></i>
                  ))}
                  <i className="fas fa-star-half-alt text-warning"></i>
                  <span className="ms-1 text-muted">(4.5)</span>
                </div>
              </div>
              <button className="btn-primary-2 w-200 add-to-cart-btn float-end ">
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
