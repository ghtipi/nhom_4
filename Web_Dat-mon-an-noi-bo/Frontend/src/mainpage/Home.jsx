import React from "react";
import "./Home.css";
import "./card.css";
import noImage from "../assets/noImage.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
// Component riêng cho Product Card để tái sử dụng
const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
      <div className="card product-card h-100">
        <img
          src={product.image || noImage}
          alt={product.name}
          className="card-img-top product-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
        />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title product-title mb-0">{product.name}</h5>
            <span className="product-price">${product.price.toFixed(2)}</span>
          </div>
          <p className="card-text product-description mt-2">
            {product.description}
          </p>
          <div className="rating">
            {/* Chỉ hiển thị 1 ngôi sao */}
            <i className="fas fa-star text-warning"></i>

            {/* Hiển thị điểm rating */}
            <span className="ms-1 text-muted">
              {product.rating.toFixed(1)}
            </span>
          </div>
          <button className="btn-primary-2 add-to-cart-btn align-self-end mt-2">
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

// Dữ liệu categories
const categories = [
  { icon: "fas fa-globe", label: "Tất cả", active: true },
  { icon: "fas fa-laptop", label: "Pizza" },
  { icon: "fas fa-tshirt", label: "Đồ ăn nhanh" },
  { icon: "fas fa-home", label: "Mì" },
  { icon: "fas fa-dumbbell", label: "Tráng miệng" },
  { icon: "fas fa-book", label: "Hải sản" },
  { icon: "fas fa-gamepad", label: "Shushi" },
  { icon: "fas fa-gamepad", label: "Ramen" },
];

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Pizza Hải Sản",
    price: 12.99,
    description: "Pizza với tôm, mực và nghêu tươi ngon",
    rating: 4.5,
    image: noImage,
  },
  {
    id: 2,
    name: "Burger Bò Phô Mai",
    price: 8.99,
    description: "Burger bò kèm phô mai tan chảy thơm ngon",
    rating: 4.2,
    image: noImage,
  },
  {
    id: 3,
    name: "Mì Ramen",
    price: 10.5,
    description: "Mì Ramen truyền thống Nhật Bản",
    rating: 4.7,
    image: noImage,
  },
  {
    id: 4,
    name: "Sushi Tổng Hợp",
    price: 15.99,
    description: "Đĩa sushi đa dạng với cá hồi, cá ngừ",
    rating: 4.8,
    image: noImage,
  },
  {
    id: 5,
    name: "Gà Rán",
    price: 7.99,
    description: "Gà rán giòn với gia vị đặc biệt",
    rating: 4.3,
    image: noImage,
  },
  {
    id: 6,
    name: "Bánh Tiramisu",
    price: 5.5,
    description: "Bánh tráng miệng Ý thơm ngon",
    rating: 4.6,
    image: noImage,
  },
  {
    id: 7,
    name: "Lẩu Hải Sản",
    price: 18.99,
    description: "Lẩu hải sản tươi ngon cho 2-3 người",
    rating: 4.9,
    image: noImage,
  },
  {
    id: 8,
    name: "Mì Xào Giòn",
    price: 9.25,
    description: "Mì xào giòn với thịt bò và rau củ",
    rating: 4.4,
    image: noImage,
  },
];

function Home() {
  return (
    <div className="background">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="d-flex flex-column">
              <span className="text-1">Căn tin trường VLSC Tipi</span>
              <span className="text-2">{new Date().toLocaleDateString()}</span>
            </div>
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="search-container d-flex ms-auto">
              <i className="bi bi-search search-icon-left"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <i className="bi bi-funnel search-icon-right"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="categories-container">
        {/* Categories Filter */}
        <div className="header-column">
          <div className="title-fixed-width">Tìm kiếm món ăn ngon nhất</div>
          <div className="viewall-fixed-width">View all</div>
        </div>

        <div className="category-filters">
          {categories.map(({ icon, label, active }, i) => (
            <div key={i} className={`filter-chip${active ? " active" : ""}`}>
              <i className={icon}></i>
              {label}
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
