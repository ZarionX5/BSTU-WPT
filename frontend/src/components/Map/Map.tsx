import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';

import { Map as OSMMap, View, TileLayer, TranslateInteraction, DragRotateAndZoomInteraction, Marker} from 'react-openlayers';
import "./Map.css";
// import 'react-openlayers/dist/index.css'; // for css

export interface ObjectInfo {
  iconPath: string,
  name: string,
  lat?: number | null,
  lon?: number | null
}

interface MapProps {
  objects?: ObjectInfo[]
}

export default function Map({objects = []}: MapProps) {

  return (
    <OSMMap >
      <DragRotateAndZoomInteraction />
      <TranslateInteraction />
      <TileLayer  source={new OSM()}/>
      <View enableRotation={true} center={fromLonLat([36.584554, 50.603404])} zoom={8}/>
      {objects.map((e, i) => {
        return (e.lon && e.lat ? <Marker key={i}
          lonLat={[e.lon, e.lat]}
          char={e.name}
        /> : null)}
      )}
    </OSMMap>
  );
}
