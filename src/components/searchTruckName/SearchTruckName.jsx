import React, { Component } from 'react';
import styles from './SearchTruckName.module.css';
import { TruckList } from 'components/truckList/TruckList';
import trucks from '../../trucks.json';

export class SearchTruckName extends Component {
  state = {
    trucks: Object.values(trucks),
    isOpen: false,
    filter: '',
  };

  toggleList = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleItemClick = e => {
    e.stopPropagation();
  };

  handleFilterChange = e => {
    const filterValue = e.target.value.toLowerCase();

    const filteredTrucks = Object.values(trucks).filter(truck =>
      truck.name.toLowerCase().includes(filterValue)
    );

    this.setState({
      filter: filterValue,
      trucks: filteredTrucks,
    });
  };

  render() {
    const { isOpen, trucks } = this.state;

    return (
      <div className={styles.customSelect} onClick={this.toggleList}>
        ------
        {isOpen && (
          <ul className={styles.dropdownList} onClick={this.handleItemClick}>
            <li className={styles.dropdownItem}>
              <input
                className={styles.filterTruck}
                type="text"
                onChange={this.handleFilterChange}
              />
            </li>
            <TruckList onFilterChange={trucks} />
          </ul>
        )}
      </div>
    );
  }
}
