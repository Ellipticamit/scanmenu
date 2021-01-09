import styles from '../styles/Home.module.css';
import Input from '../component/Input';
import Offers from '../component/Offers';
import MySlider from '../component/Slider';

export default function menu() {
  const offers = [1, 2, 3, 4, 5, 6];
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
        <Input
          name='location'
          placeholder='Sanik Farm, New Delhi'
          icon={true}
          iconname='/search_icon.svg'
          bg='white'
        />

        <div className={styles.payment}>
          <h4>Payment Offers</h4>

          <MySlider>
            {offers.map((item) => (
              <div key={item}>
                <Offers />
              </div>
            ))}
          </MySlider>
        </div>
      </section>
    </div>
  );
}
