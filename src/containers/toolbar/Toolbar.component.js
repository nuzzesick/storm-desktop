import PropTypes from 'prop-types';
import React, {
  useContext, useState,
} from 'react';
import io from 'socket.io-client';
import { SearchBox } from '../../components/SearchBox/SearchBox.component';
import StormContext from '../../context/Storm.context';
import { downloadTorrent, pauseTorrent } from '../../api/torrents';
import {
  ToolbarContainer,
  MainContentContainer,
  ContentContainer,
  AddTorrentButtonContainer,
  // CreateTorrentButton,
  ButtonLabel,
  // SettingsIcon,
  PlayIcon,
  PauseIcon,
  DeleteTorrentIcon,
  TorrentActionsButton,
  TorrentActionsContainer,
  TorrentName,
} from './Toolbar.styles';
import AddTorrentModal from '../../components/AddTorrentModal/AddTorrentModal.component';
import RemoveTorrentModal from '../../components/RemoveTorrentModal/RemoveTorrentModal.component';

export const Toolbar = ({ setActiveFilter }) => {
  const stormContext = useContext(StormContext);

  const { data: { torrentSelected, socket }, actions: { clearTorrentSelection } } = stormContext;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);

  socket.on('new-torrent', () => {
    setIsDialogOpen(true);
    socket.off();
  });

  const handleTorrent = async () => {
    if (torrentSelected.paused) {
      await downloadTorrent(torrentSelected.id);
    } else {
      await pauseTorrent(torrentSelected.magnetURI);
    }
    clearTorrentSelection();
  };

  return (
    <ToolbarContainer>
      {torrentSelected ? (
        <>
          <MainContentContainer>
            <TorrentActionsContainer>
              <TorrentName>{torrentSelected.name}</TorrentName>
              <TorrentActionsButton onClick={handleTorrent}>
                {
                  torrentSelected.paused ? (
                    <>
                      <PlayIcon />
                      {torrentSelected.done ? 'Seed' : 'Resume'}
                    </>
                  ) : (
                    <>
                      <PauseIcon />
                      Pause
                    </>
                  )
                }
              </TorrentActionsButton>
              <TorrentActionsButton
                onClick={() => { setIsRemoveDialogOpen(true); }}
              >
                <DeleteTorrentIcon />
                Delete
              </TorrentActionsButton>
            </TorrentActionsContainer>
            {/* <SettingsIcon /> */}
          </MainContentContainer>
          {
          isRemoveDialogOpen
            && <RemoveTorrentModal setIsRemoveDialogOpen={setIsRemoveDialogOpen} />
        }
        </>
      ) : (
        <>
          <MainContentContainer>
            <ContentContainer>
              <AddTorrentButtonContainer onClick={() => setIsDialogOpen(true)}>
                <ButtonLabel>+ Add new torrent</ButtonLabel>
              </AddTorrentButtonContainer>
              {/* <CreateTorrentButton>
                <ButtonLabel>Create torrent</ButtonLabel>
              </CreateTorrentButton> */}
            </ContentContainer>
            <ContentContainer>
              <SearchBox setActiveFilter={setActiveFilter} />
              {/* <SettingsIcon /> */}
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

Toolbar.propTypes = {
  setActiveFilter: PropTypes.func.isRequired,
};

export default Toolbar;
