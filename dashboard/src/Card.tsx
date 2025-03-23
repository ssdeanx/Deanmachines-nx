import styles from './Card.module.css';

export interface CardProps {
  title: string;
  children?: React.ReactNode;
  variant?: 'default' | 'outlined';
}

export function Card({ title, children, variant = 'default' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Card;
