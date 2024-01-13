import React, { useCallback, useState } from 'react';

import * as S from './TravelMap.style';
import Icon from '/icons/Icon.svg';
import { POSTS } from '@/constants/location';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '650px',
};

const myStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];

const TravelMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 37.552497, lng: 127.13301 });
  const [clicked, setClicked] = useState(false);

  const showInfoWin = e => {
    setClicked(!clicked);
  };

  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      if (map.current) {
        map.current.fitBounds(bounds);
      }

      setMap(map);
    },
    [center],
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (position, title) => {
    setCenter(position);
    setSelectedMarker({ position, title });
    setClicked(true);
  };

  return isLoaded ? (
    <GoogleMap
      options={{ disableDefaultUI: true, styles: myStyles }}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      {POSTS.slice(0, 30).map(post => (
        <MarkerF
          key={post.title}
          position={{ lat: post.latitude, lng: post.longitude }}
          onClick={() =>
            handleMarkerClick(
              { lat: post.latitude, lng: post.longitude },
              post.title,
            )
          }
          icon={{
            url: Icon,
            scaledSize: new window.google.maps.Size(32, 32),
          }}>
          {clicked &&
            selectedMarker.position &&
            selectedMarker.position.lat === post.latitude &&
            selectedMarker.position.lng === post.longitude && (
              <InfoWindowF onCloseClick={() => setClicked(false)}>
                <S.InfoContainer onClick={() => setClicked(false)}>
                  <img src={post.image} width="50px" height="50px" />
                  <span>{post.title}</span>
                </S.InfoContainer>
              </InfoWindowF>
            )}
        </MarkerF>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(TravelMap);
