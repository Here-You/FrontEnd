import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
// import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api';

const SearchMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
    libraries: ['places'],
  });
  const [selected, setSelected] = useState(null);

  if (!isLoaded) return <div>loading..</div>;
  return (
    <PlacesContainer>
      <PlacesAutocomplete setSelected={setSelected} />
    </PlacesContainer>
  );
};

export default SearchMap;

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async address => {
    setValue(address, false);
    console.log(address);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={e => setValue(e.target.value)}
        // disabled={!ready}
        style={combobaxInputStyle}
        placeholder="주소를 입력해주세요"
      />
      <ComboboxPopover style={comboboxPopoverStyle}>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

const combobaxInputStyle = {
  width: '100%',
  border: '10px',
  borderRadius: '5px',
  outline: 'none',
};

const comboboxPopoverStyle = {
  borderRadius: '5px',
  border: '0',
  boxShadow:
    'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
};

const PlacesContainer = styled.div`
  width: 200px;
`;
