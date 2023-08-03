import trucks from '../trucks.json';

export const getTrucks = () => {
  return Object.values(trucks);
};

export const getTruckId = truckId => {
  return Object.values(trucks).find(truck => truck.name === truckId);
};
