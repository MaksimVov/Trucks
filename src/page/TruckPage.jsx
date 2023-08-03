import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTruckId } from 'services/services';
import { GoogleMaps } from '../components/googleMaps/GoogleMaps';
import { TruckInformation } from '../components/truckInformation/TruckInformation.jsx';

const TruckPage = () => {
  const { truckPage } = useParams();
  const [truckId, setGetTruckId] = useState({});

  useEffect(() => {
    setGetTruckId(getTruckId(truckPage));
  }, [truckId, truckPage]);

  return (
    <div>
      {truckId.has_current_routes ? (
        <>
          <GoogleMaps />
          <TruckInformation onText={truckId} />
        </>
      ) : (
        `${truckPage} has no routes`
      )}
    </div>
  );
};

export default TruckPage;
