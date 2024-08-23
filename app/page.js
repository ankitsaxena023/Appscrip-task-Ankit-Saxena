"use client";

import React, { useEffect, useState } from "react";
import Items from "./components/items/Items";
import Featured from "./components/featured/Featured";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import styles from "./globals.css";

export default function Home() {
  const [isMenuVisible, setMenuVisibility] = useState(true);

  // Handle screen resize for menu visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMenuVisibility(false);
      } else {
        setMenuVisibility(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMenuVisibility = (shouldShow) => {
    setMenuVisibility(shouldShow);
  };

  return (
    <>
      <Navbar />
      <Featured />
      <Filter onToggleMenuVisibility={handleToggleMenuVisibility} />
      <div style={{ display: "flex", gap: "10px" }}>
        {isMenuVisible && (
          <div style={{ flex: 1 }} className={styles.menuItem}>
            <Menu />
          </div>
        )}
        <div
          style={{ flex: isMenuVisible ? 3 : 1 }}
          className={styles.cartItem}
        >
          <Items />
        </div>
      </div>
      <Footer />
    </>
  );
}
