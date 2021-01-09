import styles from '../styles/Home.module.css';
import MySlider from '../component/Slider';
import Offers from '../component/Offers';

export default function yourorder() {
  
  const offers = [1, 2, 3, 4, 5, 6];
  return (

    <div className={styles.container}>
      <header className={styles.orderheader}> 
        <div><img src='/left_arrow.png' alt='' width='30px' height='28px'/> </div>
        <div>Your Order</div>    
      </header>

      <article className={styles.payment} >
          <div className={styles.paytitle}>
            <h4>Payment Offers</h4>
          </div>

          <MySlider>
            {offers.map((item) => (
              <div key={item}>
                <Offers />
              </div>
            ))}
          </MySlider>
        </article>

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
                 
            <div className={`${styles.item_price} ${styles.bottomborder}`}>
                <div>SGST</div>
                <div>1</div>
            </div>
            <div className={styles.item_price}>
                <div>To Pay</div>
                <div>42</div>
            </div>

        </div>

        <div className={styles.placeorder}>
            <div>
              <button className={styles.btnContainer2}> PAY NOW </button>
            </div>
        </div>







    </div>  
  );
}