import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { CustomSelect } from 'components/customSelect/СustomSelect';
import styles from './Destination.module.css';

export const Destination = () => {
  return (
    <div>
      <form>
        <p className={styles.text}>Виберіть пункт призначення</p>
        <CustomSelect
          onList={[{ name: 'a' }, { name: 'b' }]}
          onNameList={'punktId'}
          onText={''}
        />
        <button className={styles.btnSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
