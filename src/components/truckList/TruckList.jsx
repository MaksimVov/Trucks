import styles from './TruckList.module.css';

export const TruckList = ({ onFilterChange }) => {
  const truckKeys = Object.keys(onFilterChange);
  const trucksValues = Object.values(onFilterChange);

  return trucksValues.map((truckName, index) => (
    <li className={styles.dropdownItem} key={truckKeys[index]}>
      {truckName.name}
    </li>
  ));
};
