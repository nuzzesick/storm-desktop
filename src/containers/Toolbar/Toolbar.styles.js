import styled from 'styled-components';

import Colors from '../../commons/Colors';

import Vectors from '../../commons/Vectors';

export const ToolbarContainer = styled.div`
  height: 5rem;
  width: 100%;
  background-color: ${Colors.BASE_DARK2};
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  border-bottom: 1px solid #3c3c3c;
`;

export const MainContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddTorrentButtonContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0 1rem 0 -1rem;
  border-radius: 4px;
  transition: 0.4s;

  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
  }
`;

export const CreateTorrentButton = styled.button`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
  }
`;

export const ButtonLabel = styled.span`
  font-size: 0.9rem;
  color: ${Colors.NEUTRAL_WHITE};
`;

export const SettingsIcon = styled(Vectors.settingsIcon)`
  margin-left: 1rem;
  cursor: pointer;
  width: 24px;
  min-width: 24px;
  fill: ${Colors.NEUTRAL_WHITE};
`;

export const PlayIcon = styled(Vectors.playIcon)`
  width: 1.1rem;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const PauseIcon = styled(Vectors.pauseTorrents)`
  width: 0.7rem;
  fill: ${Colors.NEUTRAL_WHITE};
`;

export const SeedIcon = styled(Vectors.seedingTorrents)`
  width: 0.9rem;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const DownloadIcon = styled(Vectors.downloadTorrents)`
  width: 1rem;
  fill: ${Colors.NEUTRAL_WHITE}
`;

export const DeleteTorrentIcon = styled(Vectors.deleteIcon)`
  width: 1.1rem;
  margin-left: -0.2rem;
  stroke: ${Colors.NEUTRAL_WHITE};
`;

export const TorrentActionsButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  cursor: pointer;
  margin-right: 0.6rem;
  border-radius: 4px;
  transition: 0.4s;
  color: white;
  font-size: 0.9rem;
  svg {
    margin-right: 0.4rem;
  }
  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
  }
`;

export const TorrentActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TorrentName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  margin-right: 1rem;
  max-width: 18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 1100px) {
    max-width: 20rem;
  }
  @media (min-width: 1700px) {
    width: 22rem;
  }
  @media (min-width: 2100px) {
    max-width: 24rem;
  }
`;

export const CopyMagnetURI = styled.button`
  div {
    display: flex;
    align-items: center;
    color: ${Colors.NEUTRAL_WHITE};
    font-size: 0.9rem;
    cursor: pointer;
    margin-right: -1rem;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    transition: 0.4s;
    color: white;
    font-size: 0.9rem;
    &:hover {
      background-color: ${Colors.HIGHLIGHT2};
    }
  }
  span {
    position: absolute;
    width: 10rem;
    margin-left: -4.5rem;
    text-align: center;
    background: #3c3c3cde;
    border-radius: 3px;
    padding: 0.3rem;
    font-size: 0.8rem;
    color: ${Colors.NEUTRAL_WHITE};
    margin-top: 0.4rem;
  }
`;

export const ClipboardIcon = styled(Vectors.clipboardIcon)`
  width: 1rem;
  fill: ${Colors.NEUTRAL_WHITE};
  margin-right: 0.4rem;
`;
