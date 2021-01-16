import {useState} from 'react';
import StickyBox from 'react-sticky-box';
import styles from '../styles/Home.module.css';
import {Input, InputSwitch} from '../component/Input';
import {Offers, OfferDetails} from '../component/Offers';
import MySlider from '../component/Slider';
import Menu from '../component/Menu';
import MenuButtonh from '../component/MenuButton';
import Popup from '../component/Popup';
import Card from '../component/Card';
import {allcategories} from '../dummyapi/index';
import AllCategories from '../component/AllCategories';

export default function menu({allcategories}) {
  const [showPopup, setShowPopup] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const offers = [1, 2, 3, 4, 5, 6];
  const cards = [1, 2, 3, 4, 5, 6];

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleOfferPopup = () => {
    setShowOfferPopup(!showOfferPopup);
  };

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
          zIndex: 500,
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
              <Offers showoffer={handleOfferPopup} />
            </div>
          ))}
        </MySlider>
      </section>
      <AllCategories categoriesData={allcategories} />

      <MenuButtonh handlemenu={handlePopup} />
      {showPopup && (
        <Popup closepopup={handlePopup}>
          <Menu />
        </Popup>
      )}
      {showOfferPopup && (
        <Popup closepopup={handleOfferPopup}>
          <OfferDetails />
        </Popup>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      allcategories,
    },
  };
}
