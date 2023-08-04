import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './layout/Layout';
import styles from '../styles.css';

const TruckPage = lazy(() => import('page/TruckPage'));

export const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:truckPage" element={<TruckPage />} />
        </Route>
      </Routes>
    </div>
  );
};
