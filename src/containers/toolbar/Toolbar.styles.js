import styled from 'styled-components';

import Colors from '../../commons/Colors';

import Vectors from '../../commons/Vectors';

export const ToolbarContainer = styled.div`
  height: 5rem;
  max-width: 100vw;
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
  font-size: 15px;
  color: ${Colors.NEUTRAL_WHITE};
`;

export const SettingsIcon = styled(Vectors.settingsIcon)`
  margin-left: 1rem;
  cursor: pointer;
  width: 24px;
  min-width: 24px;
  fill: ${Colors.NEUTRAL_WHITE};
`;

export const PlayIcon = styled(Vectors.playIcon)``;

export const PauseIcon = styled(Vectors.pauseTorrents)`
  width: 32px;
  fill: ${Colors.NEUTRAL_WHITE};
`;

export const DeleteTorrentIcon = styled(Vectors.deleteIcon)`
  width: 32px;
  stroke: ${Colors.NEUTRAL_WHITE};
`;

export const TorrentActionsButton = styled.button`
  margin: 0 1rem;
  cursor: pointer;
`;

export const TorrentActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
