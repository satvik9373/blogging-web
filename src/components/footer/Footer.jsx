import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="lama blog" width={80} height={50} />
          <h1 className={styles.logoText}>logisticswall</h1>
        </div>
        <p className={styles.desc}>
"Follow us for the latest updates, subscribe for insights, or contact us at contact@logisticswall.com."
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" href- width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/twitter.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com/profile.php?id=61559772389641">Facebook</Link>
          <Link href="https://www.instagram.com/logisticswall/">Instagram</Link>
          <Link href="https://twitter.com/logisticswall">Twitter</Link>
          <Link href="https://www.linkedin.com/in/logistics-wall-a3510b30a/">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;