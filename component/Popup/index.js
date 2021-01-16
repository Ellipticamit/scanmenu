import React from 'react';
import styles from '../../styles/Popup.module.css';

function Popup({children, closepopup}) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupinner}>
        <div className={styles.popupcontainer}>
          <div className={styles.closebtn}>
            <img src='/close.png' alt='' onClick={closepopup} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
