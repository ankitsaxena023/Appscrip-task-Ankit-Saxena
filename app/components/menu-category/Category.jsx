"use client";

import React from "react";
import styles from "../menu/menu.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Category = ({ title, isExpandable, isExpanded, onExpand, products }) => {
  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  return (
    <>
      <div
        className={styles.container}
        onClick={isExpandable ? onExpand : null}
      >
        <div className={styles.left}>
          <h4>{title}</h4>
          <span>All</span>
        </div>
        {isExpandable && (
          <div>
            {isExpanded ? (
              <IoIosArrowUp
                className={styles.icon}
                style={{ width: "20px", height: "20px", color: "#202020" }}
              />
            ) : (
              <IoIosArrowDown
                className={styles.icon}
                style={{ width: "20px", height: "20px", color: "#202020" }}
              />
            )}
          </div>
        )}
      </div>
      {isExpanded && isExpandable && (
        <div className={styles.expandableSection}>
          <p>Unselect all</p>
          {uniqueCategories.map((category, index) => (
            <div key={index}>
              <label>
                <input type="checkbox" /> {category}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
