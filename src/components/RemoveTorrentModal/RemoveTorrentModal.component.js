import PropTypes from 'prop-types';
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import StormContext from '../../context/Storm.context';
import { deleteTorrent, deleteTorrentAndFiles } from '../../services/torrents';
import {
  Dialog,
  DialogContent,
  Form,
  Title,
  Subtitle,
  CheckBoxContainer,
  CheckBox,
  CompletedIcon,
  DeleteButton,
} from './RemoveTorrentModal.styles';

const RemoveTorrentModal = ({ setIsRemoveDialogOpen }) => {
  const stormContext = useContext(StormContext);
  const { data: { torrentSelected }, actions: { clearTorrentSelection } } = stormContext;

  const [removeFilesSelection, setRemoveFilesSelection] = useState(false);
  const dialogRef = useRef(null);

  const handleTorrentDeletion = async (e) => {
    e.preventDefault();
    if (removeFilesSelection) {
      await deleteTorrentAndFiles(torrentSelected.magnetURI || torrentSelected.id);
    } else {
      await deleteTorrent(torrentSelected.magnetURI || torrentSelected.id, torrentSelected.paused);
    }
    clearTorrentSelection();
    setIsRemoveDialogOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsRemoveDialogOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogRef]);

  return (
    <Dialog>
      <DialogContent ref={dialogRef}>
        <Form onSubmit={handleTorrentDeletion}>
          <Title>Are you sure you want to delete this torrent?</Title>
          <Subtitle>
            This action cannot be undone.
          </Subtitle>
          <CheckBoxContainer onClick={() => setRemoveFilesSelection(!removeFilesSelection)}>
            <CheckBox>
              {
                removeFilesSelection && <CompletedIcon />
              }
            </CheckBox>
            Delete torrent files from the system.
          </CheckBoxContainer>
          <DeleteButton type="submit" value="Delete" />
        </Form>
      </DialogContent>
    </Dialog>
  );
};

RemoveTorrentModal.propTypes = {
  setIsRemoveDialogOpen: PropTypes.func.isRequired,
};

export default RemoveTorrentModal;
