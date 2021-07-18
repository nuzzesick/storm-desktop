import React, { useMemo, useContext } from 'react';

import {
  SearchBoxContainer,
  SearchIcon,
  ClearInputIcon,
  TextInput,
} from './SearchBox.styles';

import StormContext from '../../context/Storm.context';

export const SearchBox = () => {
  const stormContext = useContext(StormContext);
  const inputText = useMemo(
    () => stormContext.data.torrentSearch,
    [stormContext.data.torrentSearch],
  );

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    stormContext.actions.updateTorrentSearch(inputValue);
  };

  const clearInputText = () => {
    stormContext.actions.updateTorrentSearch('');
  };

  return (
    <SearchBoxContainer>
      <SearchIcon />
      <TextInput onChange={handleInputChange} placeholder="Search torrents by name.." value={inputText} />
      <ClearInputIcon type="button" hidden={inputText === ''} onClick={clearInputText} />
    </SearchBoxContainer>
  );
};

export default SearchBox;
