import { ReactNode } from 'react';
import styles from './navbar.module.css';

export interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  active?: boolean;
}

export interface NavbarProps {
  brand: {
    name: string;
    logo?: ReactNode;
  };
  items: NavItem[];
  onNavChange?: (item: NavItem) => void;
  className?: string;
}

export function Navbar({ brand, items, onNavChange, className = '' }: NavbarProps) {
  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.brand}>
        {brand.logo && <span className={styles.logo}>{brand.logo}</span>}
        <span className={styles.brandName}>{brand.name}</span>
      </div>
      <ul className={styles.navItems}>
        {items.map((item) => (
          <li 
            key={item.href}
            className={`${styles.navItem} ${item.active ? styles.active : ''}`}
            onClick={() => onNavChange?.(item)}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
