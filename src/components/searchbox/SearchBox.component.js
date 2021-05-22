import React, { useState } from 'react';

import {
  SearchBoxContainer,
  SearchIcon,
  ClearInputIcon,
  TextInput,
} from './SearchBox.styles';

export const SearchBox = () => {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const clearInputText = () => {
    setTextInput('');
  };

  return (
    <SearchBoxContainer>
      <SearchIcon />
      <TextInput onChange={handleInputChange} value={textInput} /> 
      {textInput !== '' && <ClearInputIcon onClick={clearInputText} />}
    </SearchBoxContainer>
  );
};

export default SearchBox;
