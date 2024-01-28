import React, { useCallback, useState } from 'react';

import * as S from './TravelMapDetail.style';
import Icon from '/icons/Icon.svg';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';

const tabletStyle = {
  height: '100vh',
  width: '100%',
};

const myStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];

const TravelMapDetail = ({ journeyInfo }) => {
  const scheduleLocations = journeyInfo?.schedule_locations;
  console.log(journeyInfo?.schedule_locations);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
    libraries: ['places'],
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
      style={{ width: '1200', height: '450' }}
      options={{ disableDefaultUI: true, styles: myStyles }}
      mapContainerStyle={tabletStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      {scheduleLocations?.map(post => (
        <MarkerF
          key={post?.diary_image.diary_id}
          position={{
            lat: post?.location.latitude,
            lng: post?.location.longitude,
          }}
          onClick={() =>
            handleMarkerClick(
              { lat: post?.location.latitude, lng: post?.location.longitude },
              post?.location.name,
            )
          }
          icon={{
            url: Icon,
            scaledSize: new window.google.maps.Size(32, 32),
          }}>
          {clicked &&
            selectedMarker.position &&
            selectedMarker.position.lat === post?.location.latitude &&
            selectedMarker.position.lng === post?.location.longitude && (
              <InfoWindowF onCloseClick={() => setClicked(false)}>
                <S.InfoContainer onClick={() => setClicked(false)}>
                  <img
                    src={post?.diary_image.imageKey}
                    width="50px"
                    height="50px"
                  />
                  <span>{post?.location.name}</span>
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

export default React.memo(TravelMapDetail);
