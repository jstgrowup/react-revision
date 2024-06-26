import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.route";
import Category from "../category/category.route";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />;
      <Route path=":category" element={<Category />} />;
    </Routes>
  );
};

export default Shop;
