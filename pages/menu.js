import StickyBox from 'react-sticky-box';
import styles from '../styles/Home.module.css';
import {Input, InputSwitch} from '../component/Input';
import Offers from '../component/Offers';
import MySlider from '../component/Slider';
import Menu from '../component/Menu';
import Card from '../component/Card';
import {allcategories} from '../dummyapi/index';
import AllCategories from '../component/AllCategories';

export default function menu({allcategories}) {
  const offers = [1, 2, 3, 4, 5, 6];
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className=''>
          McDonalds <br /> Saket, New Delhi
        </div>
        <div className={styles.takeaway}> Takeaway</div>
      </header>
      <section className={styles.mainbanner}>
        <img src='/banner_sample.png' alt='Banner' />
      </section>
      <StickyBox
        style={{
          width: '100%',
          background: '#ffffff',
          borderRadius: '15px 15px 0px 0px',
          marginTop: '-35px',
          zIndex: 10000,
        }}
      >
        <div className={styles.searchinput}>
          <Input
            name='location'
            placeholder='Sanik Farm, New Delhi'
            icon={true}
            iconname='/search_icon.svg'
            bg='white'
          />
        </div>
      </StickyBox>

      <section className={styles.payment}>
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
      </section>
      <AllCategories categoriesData={allcategories} />

      <Menu />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      allcategories,
    }, // will be passed to the page component as props
  };
}
