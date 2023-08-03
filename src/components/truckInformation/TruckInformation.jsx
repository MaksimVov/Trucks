import style from './TruckInformation.module.css';

export const TruckInformation = ({ onText }) => {
  const { name, is_lost, last_online } = onText;
  return (
    <div className={style.truckInformation}>
      <h1 className={is_lost ? style.titleTruckName : style.titleTruckNameLost}>
        {name} {last_online}
      </h1>
      <ul className={style.truckInformationList}>
        <li className={style.truckInformationItem}>asd</li>
        <li className={style.truckInformationItem}>qwe</li>
        <li className={style.truckInformationItem}>zxc</li>
        <li className={style.truckInformationItem}>qwe</li>
      </ul>
    </div>
  );
};
