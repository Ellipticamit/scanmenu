import styles from '../styles/Home.module.css';
import {Input} from '../component/Input';
import Button from '../component/Button';
import Map from '../component/Map';

export default function Location() {
  return (
    <div className={styles.main}>
      <section className={styles.map}>
        <Map />
      </section>
      <section className={styles.content}>
        <h3>Confirm your location</h3>
        <h5>Your Place</h5>
        <Input
          name='location'
          placeholder='Sanik Farm, New Delhi'
          extra='change'
        />
        <Button name='Confirm Location & Proceed' link='/menu' />
      </section>
    </div>
  );
}
