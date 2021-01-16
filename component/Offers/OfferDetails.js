import React from 'react';
import styles from '../../styles/Offers.module.css';

function OfferDetails(props) {
  return (
    <div className={styles.offerdetails}>
      <h1>Offers Details</h1>
      <div className={styles.row}>
        <div className={styles.offertext}>
          <h4>"Get 30% Off using Paytm"</h4>
        </div>
        <div>
          <img src='/paytm_logo.png' alt='' />
        </div>
      </div>
      <div className={styles.row}>
        <p className={styles.offerdesc}>
          Offers Description: Loreum pupsum loreum pupsum loreum pupsum
        </p>
      </div>

      <div className={styles.row}>
        <div className={styles.paytmbox}>
          <img src='/paytm_logo.png' alt='' />
        </div>
        <div className={styles.paytmcartprice}>
          $200 <br /> Minimum cart value
        </div>
      </div>

      <div className={styles.breakline}></div>

      <div className={styles.termconditions}>
        <ul>
          <li>term & conditions 1</li>
          <li>term & conditions 2</li>
          <li>term & conditions 3</li>
          <li>term & conditions 4</li>
        </ul>
      </div>
    </div>
  );
}

export default OfferDetails;
