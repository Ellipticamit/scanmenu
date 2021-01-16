import React from 'react';
import styles from '../../styles/Menu.module.css';

function Menu(props) {
  const menuitem = [
    'Sides',
    'Beverages',
    'Dessets',
    'Condiments',
    'Meal for 2',
    'Family Meal',
    'Dessets',
    'Condiments',
    'Meal for 2',
    'Family Meal',
  ];
  return (
    <div className={styles.menu}>
      <ul>
        {menuitem.map((item) => (
          <li className={styles.menuitem}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
