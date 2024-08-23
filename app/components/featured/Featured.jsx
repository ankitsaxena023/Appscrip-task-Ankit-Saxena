import React from "react";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <>
      <h1 className={styles.title}>Discover our products</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
      </p>
      <p className={styles.desc}>
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      <div className={styles.line}></div>
    </>
  );
};

export default Featured;
