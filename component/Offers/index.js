import React from 'react';
import styles from '../../styles/Offers.module.css';

function Offers({children}) {
  return (
    <div className={styles.offer}>
      <div className={styles.offer_item}>
        <div className={styles.img}>image</div>
        <div className={styles.content}>
          <div className={styles.name}>Upto Rs 400</div>
          <div className={styles.subname}>Cashback</div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
