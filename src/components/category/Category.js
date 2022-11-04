import React from "react";
import "./Category.scss";
function Category() {
  return (
    <div className="category-container">
      <div className="category-title">
        <label>My Note</label>
      </div>
      <div className="category-date">
        <div className="add-category">
          <div>Category</div>
        </div>
        <div className="date">Date</div>
      </div>
    </div>
  );
}

export default Category;
