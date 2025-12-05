'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../CartProvider/CartContext';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🛒</span>
          <span>MiniShop</span>
        </Link>
        
        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li>
            <Link 
              href="/" 
              className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="#" 
              className={styles.cartIcon}
              onClick={() => setMenuOpen(false)}
            >
              <span>🛒</span>
              {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}