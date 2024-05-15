import React, { useEffect, useState } from 'react';
import styles from '@/components/products.module.css';
import Image from 'next/image';

const Products = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <h3>Error: {error}</h3>;
  }
  
  return (
    <div className={styles.productListing}>
      {data.map((product) => (
        <div className={styles.product} key={product.id}>
          <div className={styles.imgContainer}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={styles.productImg}
          />
          </div>
          <div className={styles.productDetails}>
            <h2>{product.title}</h2>
            <p>Sign in or create an account to see pricing</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
