import styled from 'styled-components';

import Colors from '../../commons/Colors';

import Vectors from '../../commons/Vectors';

export const ToolbarContainer = styled.div`
  height: 70px;
  max-width: 100vw;
  background-color: ${Colors.BASE_DARK2};
  padding: 0 2rem;
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
  width: 30%;
`;

export const AddTorrentButtonContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 2rem;
  border-radius: 4px;

  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
  }
`;

export const CreateTorrentButton = styled.button`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.HIGHLIGHT2};
  }
`;

export const AddTorrentIcon = styled(Vectors.addtorrentIcon)`
  margin-right: 1rem;
`;

export const ButtonLabel = styled.span`
  font-size: 18px;
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