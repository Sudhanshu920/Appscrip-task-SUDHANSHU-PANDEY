import React from 'react';
import styles from '@/components/footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact1}>
          <h3>BE THE FIRST TO KNOW</h3>
          <label>Sign UP for updates from metta muse</label>
          <div className={styles.email}>
            <input type="text" name="" placeholder="Enter your email" id="" />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
        <hr />
        <div className={styles.contact2}>
          <h3>CONTACT US</h3>
          <label>+1213457658</label>
          <label>customercare@mettamuse.com</label>
          <hr />
          <div className={styles.country}>
          <h3>CURRENCY</h3>
            <div>
            <Image src="/usa.png" alt="" width={20} height={20} />
            <h5>USA</h5>
            </div>
          </div>
          <label>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </label>
        </div>
      <hr />
        <div className={styles.links}>
          <div className={styles.drop}>
            <label>metta muse</label>
            <Image src="/arr.png" alt="" height={20} width={20} />
          </div>
            <hr />
          <div className={styles.drop}>
            <label>Quick links</label>
            <Image src="/arr.png" alt="" height={20} width={20} />
          </div>
            <hr />
          <div className={styles.drop}>
            <label>Follow us</label>
            <Image src="/arr.png" alt="" height={20} width={20} />
          </div>
            <hr />
          <div className={styles.contact3}>
            <ul>
              <li>
                <h4>metta muse</h4>
              </li>
              <li>
                <label>about us</label>
              </li>
              <li>
                <label>stories</label>
              </li>
              <li>
                <label>Boutiques</label>
              </li>
              <li>
                <label>about us</label>
              </li>
              <li>
                <label>about us</label>
              </li>
            </ul>
          </div>
          <div className={styles.contact4}>
            <ul>
              <li>
                <h4>Quick links</h4>
              </li>
              <li>
                <label>Orders & shippings</label>
              </li>
              <li>
                <label>Login</label>
              </li>
              <li>
                <label>Payment</label>
              </li>
              <li>
                <label>Return</label>
              </li>
              <li>
                <label>Orders & shippings</label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.payments}>
          <h5>FOLLOW US</h5>
          <Image src="/fr2.png" alt="" width={80} height={40} />
          <h4>metta muse accepts</h4>
          <Image src="/pay.png" alt="" width={350} height={30} />
        </div>
      <p className={styles.rights}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </section>
  );
};

export default Footer;
