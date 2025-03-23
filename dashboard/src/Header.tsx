import styles from './Header.module.css';

export interface HeaderProps {
  title?: string;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
}

export function Header({ title = 'Dashboard', leftContent, rightContent }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        {leftContent}
        <h1 className={styles.title}>{title}</h1>
      </div>
      {rightContent && <div className={styles.right}>{rightContent}</div>}
    </header>
  );
}

export default Header;
