import Button from '../component/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.banner}>
        <img src='/banner.svg' alt='banner' width='100%' />
      </section>
      <section className={`${styles.homelogo} ${styles.contentFlex}`}>
        <div>
          <img src='/logo_sample.png' width='43px' height='45px' />
        </div>
        <h4> McDonalds</h4>
      </section>
      <section className={styles.btnContainer}>
        <Button name='Dive-in/Takeaway' link='/location' />
        <Button name='DELIVERY' link='/location' />
      </section>
      <footer className={styles.homefooter}>
        <p> All rights reserved. &copy;2021</p>
      </footer>
    </div>
  );
}
