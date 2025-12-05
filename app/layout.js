import CartProvider from '@/components/CartProvider/CartProvider';
import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import '@/styles/variables.css';

export const metadata = {
  title: 'MiniShop - Your Mini E-Commerce',
  description: 'A mini e-commerce application built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="container">
            {children}
          </main>
          <footer style={{
            backgroundColor: 'var(--dark-color)',
            color: 'white',
            padding: '2rem 0',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <div className="container">
              <p>&copy; {new Date().getFullYear()} MiniShop. All rights reserved.</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--gray-light)' }}>
                This is a demonstration e-commerce application built with Next.js
              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}