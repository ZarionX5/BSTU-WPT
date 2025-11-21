import { OSM } from 'ol/source';
import { Map as OSMMap, View, TileLayer, TranslateInteraction, DragRotateAndZoomInteraction} from 'react-openlayers';
import "./Map.css";
// import 'react-openlayers/dist/index.css'; // for css

export default function Map() {
  return (
    <OSMMap >
      <DragRotateAndZoomInteraction />
      <TileLayer  source={new OSM()}/>
      <View enableRotation={true} center={[-11997148, 4569099]} zoom={4}/>
      <TranslateInteraction />
    </OSMMap>
  );
}
