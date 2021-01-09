import styles from '../styles/Home.module.css';

export default function yourorder() {
  return (
    <div className={styles.container}>
      <header className={styles.orderheader}> 
        <div><img src='/left_arrow.png' alt='' width='30px' height='28px'/> </div>
        <div>Your Order</div>    
      </header>
        <div>
           promo
        </div>
        <div className={styles.applypromo}>
            <div> % Apply store offer</div>
            <div><img src='/green_arow.png' alt='' width='20px' height='28px'/> </div>
        </div>

        <div className={styles.price_banner}>
            <div className={styles.item_price}>
                <div>item</div>
                <div>40</div>
            </div>
            <div className={styles.item_price}>
                <div>CGST</div>
                <div>1</div>
            </div>
                 
            <div className={styles.item_price}>
                <div>SGST</div>
                <div>1</div>
            </div>
            <div className={styles.item_price}>
                <div>To Pay</div>
                <div>42</div>
            </div>

        </div>

        <div>
            <div>Place Order</div>
        </div>







    </div>  
  );
}