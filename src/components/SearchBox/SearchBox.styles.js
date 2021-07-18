import styled from 'styled-components';

import Colors from '../../commons/Colors';

import Vectors from '../../commons/Vectors';

export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  width: 100%;
  background-color: ${Colors.BASE_DARK6};
  padding: 0 0.6rem;
  border-radius: 4px;
`;

export const SearchIcon = styled(Vectors.searchIcon)`
  margin-right: 1rem;
  stroke: ${Colors.BASE_DARK3};
  width: 1.4rem;
  cursor: pointer;
`;

export const ClearInputIcon = styled(Vectors.deleteIcon)`
  stroke: ${Colors.HIGHLIGHT4};
  width: 1.4rem;
  cursor: pointer;
  ${({ hidden }) => hidden && `
    visibility: hidden;
  `}
`;

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 0.9rem;
`;
