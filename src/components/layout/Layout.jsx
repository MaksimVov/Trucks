import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { getTrucks } from 'services/services';
import { CustomSelect } from 'components/customSelect/СustomSelect';

export const Layout = () => {
  const [arrTrucks] = useState(getTrucks());

  return (
    <>
      <p>Виберіть вантажівку.</p>
      <CustomSelect
        onList={arrTrucks}
        onNameList={'truckId'}
        onText={'------'}
      />
      <Outlet />
    </>
  );
};
