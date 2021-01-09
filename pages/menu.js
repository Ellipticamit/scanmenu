import styles from '../styles/Home.module.css';
import Input from '../component/Input';
import Offers from '../component/Offers';
import MySlider from '../component/Slider';
import Menu from '../component/Menu';
import Card from '../component/Card';

export default function menu() {
  const offers = [1, 2, 3, 4, 5, 6];
  const cards = [1,2,3,4];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className=''>
          McDonalds <br /> Saket, New Delhi
        </div>
        <div className={styles.takeaway}> Takeaway</div>
      </header>

      <section className={styles.mainbanner}>
        <img src='/banner_sample.png' alt='Banner' />
      </section>

      <section className={styles.maincontent}>
        <article
          className={`${styles.paddingcontainer} ${styles.maincontent} `}
        >
          <Input
            name='location'
            placeholder='Sanik Farm, New Delhi'
            icon={true}
            iconname='/search_icon.svg'
            bg='white'
          />
        </article>

        <article className={styles.payment}>
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
        <article className={styles.paddingcontainer}>
          <div className={styles.categoriesheader}>
            <h4>All categories</h4>
          </div>
          <div className={styles.categorycontent}>
            {cards.map(item => {return (<Card key={item} />)})}

          </div>
        </article>
      </section>
      <Menu />
    </div>
  );
}
