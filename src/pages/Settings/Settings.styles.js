import styled from 'styled-components';
import Vectors from '../../commons/Vectors';
import Colors from '../../commons/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 10rem;
  transition: 0.3s;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    width: 16rem;
  }
`;

export const BackButton = styled.span`
  display: flex;
  align-items: center;
  margin: -0.5rem -1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
  width: fit-content;
  &:hover {
    background: ${Colors.HIGHLIGHT2};
  }
`;

export const BackIcon = styled(Vectors.backIcon)`
  width: 1rem;
  fill: ${Colors.NEUTRAL_WHITE};
  margin-right: 0.6rem;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${Colors.HIGHLIGHT4};
  width: 16rem;
  justify-content: center;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  // cursor: pointer;
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
  margin-left: 0.6rem;
`;

export const DownArrowIcon = styled(Vectors.downArrowIcon)`
  width: 0.4rem;
  fill: ${Colors.NEUTRAL_WHITE};
  margin: 0.2rem 0 0 0.8rem;
`;

export const AboutContainer = styled.div`
  width: 16rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4rem 0;
`;

export const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 2rem;
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
  width: 100%;
  border-radius: 2px;
  margin: 0.6rem 0;
  background-color: #232323;
  font-size: 1rem;
`;

export const Directory = styled.div`
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 1rem;
  margin-left: 1rem;
`;

export const DirectoryButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${Colors.HIGHLIGHT1};
  border-radius: 2px;
  margin: 1rem 0;
  background-color: #232323;
  cursor: pointer;
  margin-left: 1rem;
`;
