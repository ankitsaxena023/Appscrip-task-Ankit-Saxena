"use client";

import React, { useState, useEffect } from "react";
import styles from "./menu.module.css";
import Category from "../menu-category/Category";

const categories = [
  { title: "Ideal For", isExpandable: true },
  { title: "occasion", isExpandable: false },
  { title: "work", isExpandable: false },
  { title: "fabric", isExpandable: false },
  { title: "segment", isExpandable: false },
  { title: "suitable for", isExpandable: false },
  { title: "raw materials", isExpandable: false },
  { title: "Pattern", isExpandable: false },
];

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleExpand = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className={styles.menuContainer}>
          <Category
            title={category.title}
            isExpandable={category.isExpandable}
            isExpanded={expandedCategory === category.title}
            onExpand={() => handleExpand(category.title)}
            products={products}
          />
          <div className={styles.line}></div>
        </div>
      ))}
    </>
  );
};

export default Menu;
