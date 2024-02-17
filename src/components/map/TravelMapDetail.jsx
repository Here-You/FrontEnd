import React, { useCallback, useState } from 'react';

import * as S from './TravelMapDetail.style';
import Icon from '/icons/Icon.svg';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  Polyline,
  useJsApiLoader,
} from '@react-google-maps/api';

const tabletStyle = {
  height: '100vh',
  width: '90%',
};

const myStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];

const TravelMapDetail = ({ journeyInfo }) => {
  const scheduleLocations = journeyInfo?.scheduleList;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
    libraries: ['places'],
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 36, lng: 127.5 });
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

  const markerCoordinates = scheduleLocations
    ?.map(post => {
      const latitude = parseFloat(post?.location?.latitude);
      const longitude = parseFloat(post?.location?.longitude);
      if (isNaN(latitude) || isNaN(longitude)) {
        console.error('Invalid latitude or longitude:', post?.location);
        return null;
      }
      return { lat: latitude, lng: longitude };
    })
    .filter(coordinate => coordinate !== null);
  return isLoaded ? (
    <GoogleMap
      style={{ width: '1200', height: '450' }}
      options={{ disableDefaultUI: true, styles: myStyles }}
      mapContainerStyle={tabletStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      {scheduleLocations &&
        scheduleLocations?.map(post => (
          <MarkerF
            key={post?.location?.locationId}
            position={{
              lat: parseFloat(post?.location?.latitude),
              lng: parseFloat(post?.location?.longitude),
            }}
            onClick={() =>
              handleMarkerClick(
                {
                  lat: parseFloat(post?.location?.latitude),
                  lng: parseFloat(post?.location?.longitude),
                },
                post?.location?.name,
              )
            }
            icon={{
              url: Icon,
              scaledSize: new window.google.maps.Size(32, 32),
            }}>
            {clicked &&
              selectedMarker.position &&
              selectedMarker.position.lat ==
                parseFloat(post?.location?.latitude) &&
              selectedMarker.position.lng ==
                parseFloat(post?.location?.longitude) && (
                <InfoWindowF onCloseClick={() => setClicked(false)}>
                  <S.InfoContainer onClick={() => setClicked(false)}>
                    {post?.diaryImage?.imageUrl && (
                      <img
                        src={post?.diaryImage?.imageUrl}
                        width="50px"
                        height="50px"
                      />
                    )}
                    <span>
                      {post?.location?.name
                        .split(',')
                        [post?.location?.name.split(',')?.length - 1]?.trim()}
                    </span>
                  </S.InfoContainer>
                </InfoWindowF>
              )}
            <Polyline
              path={markerCoordinates}
              geodesic={true}
              options={{
                strokeColor: '#F05650',
                strokeOpacity: 0.6,
                strokeWeight: 5,
              }}
            />
          </MarkerF>
        ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(TravelMapDetail);
