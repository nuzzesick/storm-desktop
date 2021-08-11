import styled from 'styled-components';

import Vectors from '../../commons/Vectors';

import Colors from '../../commons/Colors';

export const AllTorrentsIcon = styled(Vectors.allTorrents)`
  margin-right: 12px;
  width: 14px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const DownloadTorrentsIcon = styled(Vectors.downloadTorrents)`
  margin-right: 12px;
  width: 14px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const PauseTorrentsIcon = styled(Vectors.pauseTorrents)`
  margin-right: 12px;
  width: 14px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const SeedingTorrentsIcon = styled(Vectors.seedingTorrents)`
  margin-right: 12px;
  width: 14px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const CompletedTorrentsIcon = styled(Vectors.completedTorrents)`
  margin-right: 12px;
  width: 14px;
  stroke: ${Colors.NEUTRAL_WHITE}
`;

export const StatusTextContent = styled.span`
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 14px;
`;

export const NavBarContentContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  min-width: 15%;
  border-right: 1px solid #3c3c3c;
  background-color: ${Colors.BASE_DARK2};
  z-index: 1;
  padding-top: 8rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  height: 72vh;
`;

export const ScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 300px;
  width: 100%;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${Colors.BASE_DARK3};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${Colors.HIGHLIGHT2};
  }
`;

export const StatusButton = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  border-radius: 4px;
  margin: 6px 0;
  padding: 0.5rem 1rem;
  z-index: 10;
  transition: 0.3s;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: ${Colors.HIGHLIGHT1};
  }
`;

export const StatusButtonActive = styled(StatusButton)`
  background-color: ${Colors.HIGHLIGHT1};
`;

export const CategoryButton = styled.button`
  text-align: left;
  width: 100%;
  border-radius: 4px;
  margin: 8px 0;
  padding: 0.5rem 1rem;
  z-index: 10;
  transition: 0.3s;
  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
    cursor: pointer;
  }
`;

export const TitleTextContent = styled.span`
  color: ${Colors.BASE_DARK4};
  font-size: 13px;
  margin-bottom: 1rem;
`;

export const SearchBox = styled.input`
  width: 150px;
  height: 60px;
  background-color: white;

  &:focus {
    background-color: white;
  }
`;

export const SettingsButton = styled.div`
  text-align: left;
  width: 80%;
  text-decoration: none;
  border-radius: 4px;
  margin: 6px 0;
  z-index: 10;
  transition: 0.3s;
  cursor: pointer;
  background-color: transparent;
  color: ${Colors.NEUTRAL_WHITE};
  a {
    color: ${Colors.NEUTRAL_WHITE};
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
  }
`;

export const SettingsIcon = styled(Vectors.settingsIcon)`
  width: 14px;
  margin-right: 12px;
  fill: ${Colors.NEUTRAL_WHITE}
`;
