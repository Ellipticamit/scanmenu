import React from 'react';
import Link from 'next/link';

import styles from '../../styles/Button.module.css';

function Button({name, link}) {
  return (
    <button className={styles.btn}>
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </button>
  );
}

export default Button;
