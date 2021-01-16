import React from 'react';
import styles from '../../styles/Offers.module.css';

function Offers({showoffer}) {
  return (
    <div className={styles.offer} onClick={showoffer}>
      <div className={styles.offer_item}>
        <div className={styles.img}>
          <img src='/paytm_logo.png' alt='' />
        </div>
        <div className={styles.content}>
          <div className={styles.offer_title}>Upto Rs 400</div>
          <div className={styles.offer_sub_title}>Cashback</div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
