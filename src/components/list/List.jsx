import { Link } from 'react-router-dom';
import styles from './List.module.css';

export const List = ({ onList, onClick }) => {
  const listKeys = Object.keys(onList);
  const listValues = Object.values(onList);

  return listValues.map(({ name }, index) => (
    <Link key={index} to={`${name}`} onClick={onClick}>
      <li className={styles.dropdownItem} key={listKeys[index]}>
        {name}
      </li>
    </Link>
  ));
};
