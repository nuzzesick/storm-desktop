import React, { useContext, useMemo } from 'react';

import { SearchBox } from '../../components/searchbox/SearchBox.component';

import StormContext from '../../context/Storm.context';

import {
  ToolbarContainer,
  MainContentContainer,
  ContentContainer,
  AddTorrentButtonContainer,
  CreateTorrentButton,
  ButtonLabel,
  AddTorrentIcon,
  SettingsIcon,
  PlayIcon,
  PauseIcon,
  DeleteTorrentIcon,
  TorrentActionsButton,
  TorrentActionsContainer,
} from './Toolbar.styles';

export const Toolbar = () => {
  const stormContext = useContext(StormContext);

  const isTorrentSelected = useMemo(
    () => stormContext.data.isTorrentSelected,
    [stormContext.data.isTorrentSelected]
  );

  return (
    <ToolbarContainer>
      {isTorrentSelected ? (
        <MainContentContainer>
          <TorrentActionsContainer>
            <TorrentActionsButton>
              <PlayIcon />
            </TorrentActionsButton>
            <TorrentActionsButton>
              <PauseIcon />
            </TorrentActionsButton>
            <TorrentActionsButton>
              <DeleteTorrentIcon />
            </TorrentActionsButton>
          </TorrentActionsContainer>
          <SettingsIcon />
        </MainContentContainer>
      ) : (
        <MainContentContainer>
          <ContentContainer>
            <AddTorrentButtonContainer>
              <AddTorrentIcon />
              <ButtonLabel>Add new torrent</ButtonLabel>
            </AddTorrentButtonContainer>
            <CreateTorrentButton>
              <ButtonLabel>Create torrent</ButtonLabel>
            </CreateTorrentButton>
          </ContentContainer>
          <ContentContainer>
            <SearchBox />
            <SettingsIcon />
          </ContentContainer>
        </MainContentContainer>
      )}
    </ToolbarContainer>
  );
};

export default Toolbar;