import React, { useState } from 'react';
import { downloadTorrent } from '../../api/torrents';
import {
  TopBarContainer, TopBarContent, ActionButtonsContainer, ActionButton, Dialog, Form,
} from './TopBar.styles';

const TopBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sendForm = (e) => {
    e.preventDefault();
    const torrentId = e.target[0].value;
    downloadTorrent(torrentId);
    setIsDialogOpen(false);
  };
  return (
    <>
      <TopBarContainer>
        <TopBarContent>
          <ActionButtonsContainer>
            <ActionButton onClick={() => { setIsDialogOpen(true); }}>
              + Add new torrent
            </ActionButton>
            <ActionButton>
              Create torrent
            </ActionButton>
          </ActionButtonsContainer>
        </TopBarContent>
      </TopBarContainer>
      {
        isDialogOpen && (
        <Dialog>
          <Form onSubmit={sendForm}>
            <input type="text" id="torrent" placeholder="Enter torrent ID" autoComplete="off" />
            <input type="submit" value="Download" />
          </Form>
          <button
            style={{ color: 'white', cursor: 'pointer' }}
            type="button"
            onClick={() => { setIsDialogOpen(false); }}
          >
            Cancel
          </button>
        </Dialog>
        )
      }
    </>
  );
};

export default TopBar;
