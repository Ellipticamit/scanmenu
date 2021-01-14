import React, {useState} from 'react';
import Switch from 'react-switch';
import styles from '../../styles/Categories.module.css';
import {InputSwitch} from '../Input';
import Card from '../Card';

function AllCategories({categoriesData}) {
  const [data, setData] = useState(categoriesData);
  const [checked, setChecked] = useState(true);

  const filterData = () => {
    if (checked) {
      const filteredData = data.filter((item) => item.foodtype === 'veg');
      setData(filteredData);
    } else {
      setData(categoriesData);
    }
    setChecked(!checked);
  };
  return (
    <section className={styles.categories}>
      <article className={styles.categoriesheader}>
        <h2>All categories</h2>
        <div className={styles.contentFlex}>
          <div className={styles.veg}>Veg </div>
          <div>
            <Switch
              checked={!checked}
              onChange={filterData}
              onColor='#89e562'
              onHandleColor='#4AA127'
              handleDiameter={10}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
              activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
              height={20}
              width={40}
              className='react-switch'
              id='material-switch'
            />
          </div>
        </div>
      </article>
      <article className={styles.categorycontent}>
        {data.map((item, key) => {
          return <Card key={key} data={item} />;
        })}
      </article>
    </section>
  );
}

export default AllCategories;
