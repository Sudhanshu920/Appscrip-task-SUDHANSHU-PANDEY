'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Filtering from '@/components/Filtering';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [show, setShow] = useState(true);

  function handleClick(){
    setShow(!show);
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.strip}>
          <Image src="/loip.png" height={20} width={100} alt="strip-img" />
          <Image src="/loip.png" height={20} width={100} alt="strip-img" />
          <Image src="/loip.png" height={20} width={100} alt="strip-img" />
        </div>

        <navbar className={styles.navbar}>
          <div className={styles.logo}>
            <div className={styles.logoImg}>
            <Image src="/menu.png" height={40} width={40} alt="logo" className={styles.menu}/>
            <Image src="/Logo.png" height={40} width={40} alt="logo" />
            </div>
            <a href="/" className={styles.logoName}>
              LOGO
            </a>
            <ul className={styles.nav_list}>
              <li>
                <Image
                  src="/search-normal.png"
                  height={25}
                  width={25}
                  alt="strip-img"
                />
              </li>
              <li>
                <Image
                  src="/heart.png"
                  height={25}
                  width={25}
                  alt="strip-img"
                />
              </li>
              <li>
                <Image
                  src="/shopping-bag.png"
                  height={25}
                  width={25}
                  alt="strip-img"
                />
              </li>
              <li>
                <Image
                  src="/profile.png"
                  height={25}
                  width={25}
                  alt="strip-img"
                />
              </li>
              <li>
                <Image
                  src="/Language.png"
                  height={25}
                  width={35}
                  alt="strip-img"
                />
              </li>
            </ul>
          </div>

          <div className={styles.links}>
            <ul className={styles.links_list}>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </navbar>

        <hr className={styles.line} />

        <div className={styles.desc}>
          <h1 className={styles.descHeading}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.descText}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque amet mi ut elementum
            dolor. Lorem ipsum mii dolor sit amet.
          </p>
        </div>
      </header>

      <section className={styles.hero}>
        <hr className={styles.line} />
        <div className={styles.options}>
          <div className={styles.leftOpt}>
            <h5>3425 items</h5>
            <h4 onClick={handleClick}>{show ? 'HIDE FILTER' : 'SHOW FILTER'}</h4>
          </div>
          <h4>RECOMMENDED</h4>
        </div>
        <hr className={styles.line} />
        <main>
          <div
            className={`${styles.filterOptions}   ${show ? styles.active : ''}`}
          >
            <Filtering show={show} />
          </div>
          <div className={styles.productListings}>
            <Products />
          </div>
        </main>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
