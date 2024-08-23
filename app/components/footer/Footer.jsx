import React, { useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineDown } from "react-icons/ai"; // Importing the down arrow icon

const Footer = () => {
  const [isMettaMuseVisible, setIsMettaMuseVisible] = useState(true);
  const [isQuickLinksVisible, setIsQuickLinksVisible] = useState(true);
  const [isFollowUsVisible, setIsFollowUsVisible] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.footerTop}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <h3>Be the first to know</h3>
              <p>Sign up for updates from mettā muse.</p>
            </div>
            <div className={styles.leftBottom}>
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className={styles.emailInput}
              />
              <button>Subscribe</button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h3>Contact Us</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className={styles.rightBottom}>
              <h3>Currency</h3>
              <div className={styles.flagContainer}>
                <Image src="/flag.png" alt="flag" width={24} height={24} />
                <h4>&#x2022; USD</h4>
              </div>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover
              </p>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.footerMiddle}>
          <div className={styles.footerMiddleLeft}>
            <div className={styles.footerMiddleFirst}>
              <h3
                onClick={() => setIsMettaMuseVisible(!isMettaMuseVisible)}
                className={styles.mobileOnly}
              >
                mettā muse <AiOutlineDown className={styles.hideDownArrow} />
              </h3>
              {isMettaMuseVisible && (
                <ul>
                  <li>About Us</li>
                  <li>Stories</li>
                  <li>Artisans</li>
                  <li>Boutiques</li>
                  <li>Contact Us</li>
                  <li>EU Compliances Docs</li>
                </ul>
              )}
            </div>
            <div className={styles.footerMiddleSecond}>
              <h3
                onClick={() => setIsQuickLinksVisible(!isQuickLinksVisible)}
                className={styles.mobileOnly}
              >
                Quick Links <AiOutlineDown className={styles.hideDownArrow} />
              </h3>
              {isQuickLinksVisible && (
                <ul>
                  <li>Orders & Shipping</li>
                  <li>Join/Login as a Seller</li>
                  <li>Payment & Pricing</li>
                  <li>Return & Refunds</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              )}
            </div>
          </div>
          <div className={styles.footerMiddleRight}>
            <div className={styles.footerMiddleRightTop}>
              <h3
                onClick={() => setIsFollowUsVisible(!isFollowUsVisible)}
                className={styles.mobileOnly}
              >
                Follow Us <AiOutlineDown className={styles.hideDownArrow} />
              </h3>
              {isFollowUsVisible && (
                <div className={styles.social}>
                  <SlSocialInstagram
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "50px",
                      border: "1px solid white",
                    }}
                  />
                  <GrLinkedin
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "50px",
                      border: "1px solid white",
                    }}
                  />
                </div>
              )}
            </div>
            <div className={styles.footerMiddleRightBottom}>
              <h3>
                <span className={styles.modifiedTitle}>mettā muse</span> Accepts
              </h3>
              <div className={styles.payImageContainer}>
                <Image
                  src="/gpay.png"
                  width={50}
                  height={30}
                  className={styles.paymentMethodItem}
                />
                <Image
                  src="/mastercard.png"
                  width={50}
                  height={30}
                  className={styles.paymentMethodItem}
                />
                <Image
                  src="/paypal.png"
                  width={50}
                  height={30}
                  className={styles.paymentMethodItem}
                />
                <Image
                  src="/amex.png"
                  width={50}
                  height={30}
                  className={styles.paymentMethodItem}
                />
                <Image
                  src="/shirtapp.png"
                  width={50}
                  height={30}
                  className={styles.paymentMethodItem}
                />
                <Image
                  src="/apple.png"
                  width={50}
                  height={30}
                  className={styles.paymentMethodItem}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          Copyright © 2023 mettamuse. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
