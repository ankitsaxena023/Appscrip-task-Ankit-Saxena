"use client";

import React, { useState } from "react";
import styles from "./filter.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Filter = ({ onToggleMenuVisibility }) => {
  const [showFilter, setShowFilter] = useState(true);

  const handleToggle = () => {
    setShowFilter((prev) => {
      const newShowFilter = !prev;
      onToggleMenuVisibility(newShowFilter);
      return newShowFilter;
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_filter}>
          <h4>3425 ITEMS</h4>
          <div className={styles.hide_show_filter} onClick={handleToggle}>
            <IoIosArrowBack
              style={{
                width: "20px",
                height: "20px",
                color: "#202020",
                fontWeight: "200",
              }}
            />
            <h4 style={{ cursor: "pointer" }}>
              {showFilter ? "Hide Filter" : "Show Filter"}
            </h4>
          </div>
        </div>
        <div className={styles.right_filter}>
          <div className={styles.recommended_section}>
            <h4>Recommended</h4>
            <IoIosArrowDown
              className={styles.icon}
              style={{ width: "20px", height: "20px", color: "#202020" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default Filter;
