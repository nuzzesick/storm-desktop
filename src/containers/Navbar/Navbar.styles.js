import styled from 'styled-components';

import Vectors from '../../commons/Vectors';

import Colors from '../../commons/Colors';

export const AllTorrentsIcon = styled(Vectors.allTorrents)`
  margin-right: 12px;
  width: 15px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const DownloadTorrentsIcon = styled(Vectors.downloadTorrents)`
  margin-right: 12px;
  width: 15px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const PauseTorrentsIcon = styled(Vectors.pauseTorrents)`
  margin-right: 12px;
  width: 15px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const SeedingTorrentsIcon = styled(Vectors.seedingTorrents)`
  margin-right: 12px;
  width: 15px;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const CompletedTorrentsIcon = styled(Vectors.completedTorrents)`
  margin-right: 12px;
  width: 15px;
  stroke: ${Colors.NEUTRAL_WHITE}
`;

export const StatusTextContent = styled.span`
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 16px;
`;

export const NavBarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  min-width: 250px;
  background-color: ${Colors.BASE_DARK2};
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
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
  margin: 8px 0;
  padding: 0.5rem 1rem;
  z-index: 10;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.HIGHLIGHT1};
  }
  ${({ active }) => active && `
    background-color: ${Colors.HIGHLIGHT1};
  `}
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
  font-size: 14px;
  margin-bottom: 1rem;
`;
