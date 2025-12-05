'use client';

import Link from 'next/link';
import { useCart } from '../CartProvider/CartContext';
import styles from './ProductDetails.module.css';

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product not found</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
        <Link href="/" className={styles.backButton}>
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link href="/" className={styles.backButton}>
        ← Back to Products
      </Link>
      
      <div className={styles.detailsContainer}>
        <div className={styles.imageSection}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={styles.mainImage}
          />
        </div>
        
        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <div className={styles.productPrice}>${product.price.toFixed(2)}</div>
          <p className={styles.productDescription}>{product.description}</p>
          <button 
            className={styles.addToCartButton}
            onClick={handleAddToCart}
          >
            <span>🛒</span>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}