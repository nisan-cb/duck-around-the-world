import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import { Map as OlMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from '../../store/mapSlice'


const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

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

      map.on('click', (event) => {
        const clickedCoords = event.coordinate;
        dispatch(actions.setSelectedCoords(clickedCoords as [number, number]))
        console.log('Coordinates:', clickedCoords);
      });

      // Clean up on component unmount
      return () => map.setTarget(undefined);
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Map;
