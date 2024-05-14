import React from 'react'
import styles from '@/components/products.module.css'
import Image from 'next/image'

const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 20.99,
      image: "/bag.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 15.49,
      image: "/bag.jpg"
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 30.00,
      image: "/bag.jpg"
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4",
      price: 25.99,
      image: "/bag.jpg"
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5",
      price: 18.79,
      image: "/bag.jpg"
    },
    {
      id: 6,
      name: "Product 1",
      description: "Description of Product 1",
      price: 20.99,
      image: "/bag.jpg"
    },
    {
      id: 7,
      name: "Product 2",
      description: "Description of Product 2",
      price: 15.49,
      image: "/bag.jpg"
    },
    {
      id: 8,
      name: "Product 3",
      description: "Description of Product 3",
      price: 30.00,
      image: "/bag.jpg"
    },
    {
      id: 9,
      name: "Product 4",
      description: "Description of Product 4",
      price: 25.99,
      image: "/bag.jpg"
    },
    {
      id: 10,
      name: "Product 5",
      description: "Description of Product 5",
      price: 18.79,
      image: "/bag.jpg"
    },{
      id: 11,
      name: "Product 1",
      description: "Description of Product 1",
      price: 20.99,
      image: "/bag.jpg"
    },
    {
      id: 12,
      name: "Product 2",
      description: "Description of Product 2",
      price: 15.49,
      image: "/bag.jpg"
    },
    {
      id: 13,
      name: "Product 3",
      description: "Description of Product 3",
      price: 30.00,
      image: "/bag.jpg"
    },
    {
      id: 14,
      name: "Product 4",
      description: "Description of Product 4",
      price: 25.99,
      image: "/bag.jpg"
    },
    {
      id: 15,
      name: "Product 5",
      description: "Description of Product 5",
      price: 18.79,
      image: "/bag.jpg"
    },
    {
      id: 16,
      name: "Product 1",
      description: "Description of Product 1",
      price: 20.99,
      image: "/bag.jpg"
    },
  ];
  

const Products = () => {
  return (
    <div className={styles.productListing}>
      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <Image src={product.image} alt={product.name} layout="responsive" width={200} height={250}/>
          <div className={styles.productDetails}>
            <h2>{product.name}</h2>
            <p>Sign in or create an account to see pricing</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products