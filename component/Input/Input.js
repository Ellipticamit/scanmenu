import React from 'react';
import styles from '../../styles/Input.module.css';

function Input({
  name,
  placeholder,
  extra = '',
  icon = false,
  iconname,
  bg = '#f6f6f6',
}) {
  return (
    <div className={styles.input}>
      {icon && (
        <span className={styles.icon}>
          <img src={iconname} alt='search' />
        </span>
      )}
      <input
        name={name}
        placeholder={placeholder}
        style={{background: {bg}, paddingRight: icon ? '38px' : '12px'}}
      />
      {extra && <div className={styles.extra}>{extra} </div>}
    </div>
  );
}

export default Input;
