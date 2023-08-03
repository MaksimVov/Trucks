import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { List } from 'components/list/List';
import styles from './CustomSelect.module.css';

export const CustomSelect = ({ onList, onNameList, onText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = e => {
    e.stopPropagation();
  };

  const updateQueryString = e => {
    const truckIdValue = e.target.value;
    if (truckIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ [onNameList]: truckIdValue });
  };

  const itemId = searchParams.get(onNameList) ?? '';

  const filterList = itemId
    ? onList.filter(truck =>
        truck.name.toLowerCase().includes(itemId.toLowerCase())
      )
    : onList;

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.customSelect} onClick={toggleList}>
        {onText}
      </div>
      {isOpen && (
        <ul className={styles.dropdownList} onClick={handleItemClick}>
          <li className={styles.dropdownItem}>
            <input
              className={styles.filterList}
              type="text"
              value={itemId}
              onChange={updateQueryString}
            />
          </li>

          <List onList={filterList} onClick={toggleList} />
        </ul>
      )}
    </div>
  );
};
