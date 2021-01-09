import React from 'react';
import styles from '../../styles/Input.module.css';

function IconInput(props) {
  return (
    <div className={styles.input}>
      <span className={styles.icon}>se</span>
      <input name={name} placeholder={placeholder} />
    </div>
  );
}

export default IconInput;
