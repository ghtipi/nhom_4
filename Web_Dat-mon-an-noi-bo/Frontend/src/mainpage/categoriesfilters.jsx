import React from 'react';
import './CategoriesFilters.css';

const categories = [
  { icon: "fas fa-globe", label: "Tất cả", active: true },
  { icon: "fas fa-laptop", label: "Pizza" },
  { icon: "fas fa-tshirt", label: "Đồ ăn nhanh" },
  { icon: "fas fa-home", label: "Mì" },
  { icon: "fas fa-dumbbell", label: "Tráng miệng" },
  { icon: "fas fa-book", label: "Hải sản" },
  { icon: "fas fa-gamepad", label: "Shushi" },
  { icon: "fas fa-gamepad", label: "Ramen" }
];

function CategoriesFilters() {
  return (
    <div className="categories-container">
      <div className="header-column">
        <div className="title-fixed-width">Tìm kiếm món ăn ngon nhất</div>
        <div className="viewall-fixed-width">View all</div>
      </div>

      <div className="category-filters">
        {categories.map(({ icon, label, active }, i) => (
          <div key={i} className={`filter-chip${active ? ' active' : ''}`}>
            <i className={icon}></i>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesFilters;