import React, {
  useContext, useMemo, Fragment, useState,
} from 'react';

import { SearchBox } from '../../components/SearchBox/SearchBox.component';

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
import AddTorrentModal from '../../components/AddTorrentModal/AddTorrentModal.component';

export const Toolbar = () => {
  const stormContext = useContext(StormContext);

  const isTorrentSelected = useMemo(
    () => stormContext.data.isTorrentSelected,
    [stormContext.data.isTorrentSelected],
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        <>
          <MainContentContainer>
            <ContentContainer>
              <AddTorrentButtonContainer onClick={() => setIsDialogOpen(true)}>
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
          {
            isDialogOpen
              && <AddTorrentModal setIsDialogOpen={setIsDialogOpen} />
          }
        </>
      )}
    </ToolbarContainer>
  );
};

export default Toolbar;
