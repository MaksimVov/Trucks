import { Outlet } from 'react-router-dom';
import { useState, Suspense } from 'react';
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
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
