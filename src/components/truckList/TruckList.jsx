export const TruckList = ({ trucks }) => {
  const arrTrucks = Object.values(trucks);
  return arrTrucks.map(truckName => <li>{truckName.name}</li>);
};
