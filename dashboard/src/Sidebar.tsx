import styles from './Sidebar.module.css';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface SidebarProps {
  items: SidebarItem[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Sidebar({ items, header, footer }: SidebarProps) {
  return (
    <aside className={styles.container}>
      {header && <div className={styles.header}>{header}</div>}
      <nav className={styles.nav}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.item} ${item.active ? styles.active : ''}`}
            onClick={item.onClick}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </nav>
      {footer && <div className={styles.footer}>{footer}</div>}
    </aside>
  );
}

export default Sidebar;
