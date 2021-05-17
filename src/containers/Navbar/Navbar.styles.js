import styled from 'styled-components';

import Vectors from '../../commons/Vectors';

import Colors from '../../commons/Colors';

export const AllTorrentsIcon = styled(Vectors.AllTorrents)`
  margin-right: 12px;
`;

export const DownloadTorrentsIcon = styled(Vectors.DownloadTorrents)`
  margin-right: 12px;
`;

export const PauseTorrentsIcon = styled(Vectors.PauseTorrents)`
  margin-right: 12px;
`;

export const SeedingTorrentsIcon = styled(Vectors.SeedingTorrents)`
  margin-right: 12px;
`;

export const CompletedTorrentsIcon = styled(Vectors.CompletedTorrents)`
  margin-right: 12px;
`;

export const StatusTextContent = styled.span`
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 18px;
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
  text-align: left;
  width: 100%;
  border-radius: 4px;
  margin: 8px 0;
  padding: 0.5rem 1rem;
  z-index: 10;
  &:hover {
    background-color: ${Colors.HIGHLIGHT1};
    cursor: pointer;
  }
`;

export const CategoryButton = styled.button`
  text-align: left;
  width: 100%;
  border-radius: 4px;
  margin: 8px 0;
  padding: 0.5rem 1rem;
  z-index: 10;
  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
    cursor: pointer;
  }
`;

export const TitleTextContent = styled.span`
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 20px;
  margin-bottom: 1rem;
`;
