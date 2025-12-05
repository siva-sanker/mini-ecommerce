import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

async function getProducts() {
  // Fetch products from our API route
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
}

export default async function Home() {
  let products = [];
  let error = null;
  
  try {
    products = await getProducts();
  } catch (err) {
    console.error('Error fetching products:', err);
    error = err.message;
  }

  return (
    <div className={styles.homePage}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to MiniShop</h1>
        <p className={styles.heroSubtitle}>Discover amazing products at great prices</p>
      </header>
      
      {error && (
        <div className={styles.errorMessage}>
          <p>Error loading products: {error}</p>
        </div>
      )}
      
      {products.length === 0 && !error ? (
        <div className={styles.loading}>
          <p>Loading products...</p>
        </div>
      ) : (
        <>
          <div className={styles.productsHeader}>
            <h2 className={styles.sectionTitle}>Featured Products</h2>
            <p className={styles.sectionSubtitle}>Explore our collection of premium products</p>
          </div>
          
          <div className={styles.productsGrid}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}