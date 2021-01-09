import React from 'react';
import Link from 'next/link';

import styles from '../../styles/Button.module.css';

function Button({name, link}) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.btn}>{name}</div>
      </a>
    </Link>
  );
}

export default Button;
