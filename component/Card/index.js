import React from 'react';
import styles from '../../styles/Card.module.css';

function Card({data}) {
  const {name, desc, imgsrc, foodtype, price} = data;
  const imgvegsrc = foodtype === 'veg' ? '/veg_icon.svg' : '/nonveg_icon.svg';
  return (
    <div className={styles.card}>
      <div className={styles.foodtype}>
        <img src={imgvegsrc} alt='' />
      </div>
      <div className={styles.cardimage}>
        <img src={imgsrc} alt='' />
      </div>
      <div className={styles.cardcontent}>
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
      <div className={styles.cardfooter}>
        <h4>$ {price} </h4> <div className={styles.addbutton}>Add</div>
      </div>
    </div>
  );
}

export default Card;
