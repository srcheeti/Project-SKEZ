//Availibility Map
import map from './assets/map.png';
import styles from './Map.css';

function Map() {
  return (
    <div className={styles['map-container']}>
      <h1 style={{ textAlign: "center" }}>Availability Map</h1>
      <img src={map} className="image" alt="logo" />
    </div>
  );
}
export default Map;