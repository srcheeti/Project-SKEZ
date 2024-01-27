//Availibility Map
import map from './assets/map.png';
import './App.css';

function Map() {
  return (
    <div className="Map" style={{
      width: "100%",
      height: "100%",
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center"
  }}>

      <h1>Avalability Map</h1>
      <div style={{ width: "1400px", borderStyle: "double"}}>
        <img src={map} className="image" alt="logo" />
      </div>
  </div>
  );
}

export default Map;
