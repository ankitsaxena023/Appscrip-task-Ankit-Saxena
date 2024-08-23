"use client";

import React, { useState } from "react";
import Items from "./components/items/Items";
import Featured from "./components/featured/Featured";
import Filter from "./components/filter/Filter";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import styles from "./globals.css";

export default function Home() {
  const [isMenuVisible, setMenuVisibility] = useState(true);

  const handleToggleMenuVisibility = (isFilterVisible) => {
    setMenuVisibility(isFilterVisible);
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
          <Items onToggleMenuVisibility={handleToggleMenuVisibility} />
        </div>
      </div>
      <Footer />
    </>
  );
}
