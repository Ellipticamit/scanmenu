import React from 'react';
import styles from '../../styles/Card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardimage}> 
            <img src="/logo_sample.png" alt="" />
            
            </div>
            <div className={styles.cardcontent}>
                <h4>itemname</h4> 
            </div>
            <div className={styles.cardfooter}>
            <h4>$ 200 </h4> <div className={styles.addbutton}>add</div>
            </div>
        </div>
    );
}

export default Card;