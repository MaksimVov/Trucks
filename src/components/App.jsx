import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import styles from '../styles.css';
import TruckPage from 'page/TruckPage';
import { lazy } from 'react';

// сonst Home = lazy(() => import)

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
