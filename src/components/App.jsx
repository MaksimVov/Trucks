import React, { Component } from 'react';
import { SearchTruckName } from './searchTruckName/SearchTruckName';
import styles from '../styles.css';

export class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Виберіть вантажівку.</p>
        <SearchTruckName />
      </div>
    );
  }
}
