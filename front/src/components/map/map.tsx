import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import { Map as OlMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (mapRef.current) {
      const map = new OlMap({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
            projection: 'EPSG:4326',
            center: [36, 30],
            zoom: 1,
        }),
      });

      // Clean up on component unmount
      return () => map.setTarget(undefined);
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Map;
