import ProductDetails from '@/components/ProductDetails/ProductDetails';
import styles from './page.module.css';

async function getProduct(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${id}`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch product');
  }
  
  return response.json();
}

export default async function ProductPage({ params }) {
  // Await the params promise first
  const { id } = await params;
  const productId = parseInt(id);
  
  let product = null;
  let error = null;
  
  try {
    product = await getProduct(productId);
  } catch (err) {
    console.error('Error fetching product:', err);
    error = err.message;
  }

  return (
    <div className={styles.productPage}>
      {error ? (
        <div className={styles.error}>
          <h2>Error Loading Product</h2>
          <p>{error}</p>
        </div>
      ) : (
        <ProductDetails product={product} />
      )}
    </div>
  );
}