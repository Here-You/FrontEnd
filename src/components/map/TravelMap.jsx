import React, { useCallback, useState } from 'react';

import * as S from './TravelMap.style';
import Icon from '/icons/Icon.svg';
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

const center = {
  lat: 37.552497,
  lng: 127.13301,
};

const posts = [
  {
    title: '고덕동',
    latitude: 37.561068,
    longitude: 127.160582,
    image: 'https://i.ytimg.com/vi/WBll_pmvY78/maxresdefault.jpg',
  },
  {
    title: '둔촌동',
    latitude: 37.531157,
    longitude: 127.142891,
    image:
      'data:image/jpeg;base64,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',
  },
  {
    title: '암사동2',
    latitude: 37.552497,
    longitude: 127.13301,
    image: 'https://i.ytimg.com/vi/WBll_pmvY78/maxresdefault.jpg',
  },
  {
    title: '암사동',
    latitude: 37.552497,
    longitude: 127.1333,
    image:
      'https://i.namu.wiki/i/7qjucbvcqL04izLJjuMNZ67kxpX-YXEpyaPh7enBEMpt9BNnKQZpSFM5mO4EN7uc4UOMW4G0nyP5JYTP_y3UwQ.webp',
  },
  {
    title: '성내동',
    latitude: 37.531338,
    longitude: 127.129174,
    image:
      'https://i.namu.wiki/i/7qjucbvcqL04izLJjuMNZ67kxpX-YXEpyaPh7enBEMpt9BNnKQZpSFM5mO4EN7uc4UOMW4G0nyP5JYTP_y3UwQ.webp',
  },
  {
    title: '천호동',
    latitude: 37.543676,
    longitude: 127.131748,
    image:
      'https://www.madecake.co.kr/data/item/1527904406/thumb-BDAY_1C1_1000x1000.jpg',
  },
];

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
  const [clicked, setClicked] = useState(false);
  const showInfoWin = e => {
    setClicked(!clicked);
  };
  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    if (map.current) {
      map.current.fitBounds(bounds);
    }

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      options={{ disableDefaultUI: true, styles: myStyles }}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}

      {posts.slice(0, 30).map(post => (
        <>
          <MarkerF
            position={{ lat: post.latitude, lng: post.longitude }}
            onClick={() => setClicked(!clicked)}
            icon={{
              url: Icon,
              scaledSize: new window.google.maps.Size(32, 32),
            }}>
            {clicked ? (
              <InfoWindowF onCloseClick={() => setClicked(!clicked)}>
                <S.InfoContainer>
                  <img src={post.image} width="50px" height="50px" />
                  <span>{post.title}</span>
                </S.InfoContainer>
              </InfoWindowF>
            ) : (
              ''
            )}
          </MarkerF>
        </>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(TravelMap);
