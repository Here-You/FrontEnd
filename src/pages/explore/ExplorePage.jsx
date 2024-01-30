import React, { useEffect, useState } from 'react';

import Recent from '@/components/explore/Recent';
import Search from '@/components/explore/Search';
import SearchResult from '@/components/explore/SearchResult';
import Trending from '@/components/explore/Trending';

export default function ExplorePage() {
  const [isValue, setIsvalue] = useState(false);
  return (
    <div>
      <Search />
      {!isValue && (
        <div>
          <Trending />
          <Recent />
        </div>
      )}
      {isValue && (
        <div>
          <SearchResult />
        </div>
      )}
    </div>
  );
}
