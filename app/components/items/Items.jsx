"use client";

import React, { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import styles from "./items.module.css";

const Items = ({ onToggleMenuVisibility }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle screen resize for menu visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        onToggleMenuVisibility(false);
      } else {
        onToggleMenuVisibility(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [onToggleMenuVisibility]);

  return (
    <div className={styles.itemsContainer}>
      {loading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        products.map((product) => (
          <div key={product.id} className={styles.item}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.details}>
              <h4 className={styles.title}>{product.title}</h4>
              <div className={styles.priceContainer}>
                <span className={styles.price}>${product.price}</span>
                <IoHeartOutline className={styles.heartIcon} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Items;
