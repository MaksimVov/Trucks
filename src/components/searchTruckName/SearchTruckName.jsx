import React, { Component } from 'react';
import styles from './SearchTruckName.module.css';
import { TruckList } from 'components/truckList/TruckList';
import trucks from '../../trucks.json';

export class SearchTruckName extends Component {
  state = {
    isOpen: false,
  };

  toggleList = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleItemClick = e => {
    e.stopPropagation();
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.customSelect} onClick={this.toggleList}>
        ------
        {isOpen && (
          <ul className={styles.dropdownList} onClick={this.handleItemClick}>
            <li>
              <input type="text" />
            </li>
            <TruckList trucks={trucks} />
          </ul>
        )}
      </div>
    );
  }
}
