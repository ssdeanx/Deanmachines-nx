import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
        © 2024 DeanMachines-NX. All rights reserved.
      </div>
      <div className={styles.links}>
        <a href="/privacy" className={styles.link}>Privacy Policy</a>
        <a href="/terms" className={styles.link}>Terms of Service</a>
        <a href="/contact" className={styles.link}>Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
