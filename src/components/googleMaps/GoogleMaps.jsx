import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { CustomSelect } from 'components/customSelect/СustomSelect';
import { Destination } from 'components/destination/Destination';
import styles from './GoogleMaps.module.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDBHaQhr7HUZFfyirdhXEc01n4vMJRK0TI',
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <div>
      <p className={styles.text}>Виберіть пункт призначення</p>
      <CustomSelect
        onList={[{ name: 'a' }, { name: 'b' }]}
        onNameList={'punktId'}
        onText={''}
      />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </GoogleMap>
      <Destination />
    </div>
  );
};
