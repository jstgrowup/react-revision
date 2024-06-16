import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./directory.component.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
