import React from 'react';
import styles from '../../styles/Menu.module.css';

function MenuButtonh({handlemenu}) {
  return (
    <div className={styles.menu_btn} onClick={handlemenu}>
      <div className={styles.menu_content}>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.menu_name}>Menu</div>
      </div>
    </div>
  );
}

export default MenuButtonh;
