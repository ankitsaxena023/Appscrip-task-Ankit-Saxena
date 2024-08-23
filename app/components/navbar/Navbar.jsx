import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Image
              src="/solar_hamburger-menu-linear.png"
              alt="hamburger-menu"
              width={36}
              height={36}
              className={styles.hamburger}
            />
            <Image src="/Logo.png" alt="logo" width={36} height={36} />
          </div>
          <div className={styles.title}>LOGO</div>
          <div className={styles.menu}>
            <CiSearch
              style={{ width: "24px", height: "24px", color: "#202020" }}
            />
            <IoHeartOutline
              style={{ width: "24px", height: "24px", color: "#202020" }}
            />
            <HiOutlineShoppingBag
              style={{ width: "24px", height: "24px", color: "#202020" }}
            />
            <HiOutlineUser
              className={styles.icon}
              style={{ width: "24px", height: "24px", color: "#202020" }}
            />
            <div className={styles.name_container}>
              <span className={styles.name}>ENG</span>
              <MdOutlineKeyboardArrowDown
                className={styles.icon}
                style={{ width: "24px", height: "24px", color: "#202020" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.links}>
            <h3>Shop</h3>
            <h3>Skills</h3>
            <h3>Stories</h3>
            <h3>About</h3>
            <h3>Contact Us</h3>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default Navbar;
