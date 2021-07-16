import PropTypes from 'prop-types';
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import StormContext from '../../context/Storm.context';
import { downloadTorrent } from '../../api/torrents';
import {
  Dialog, DialogContent, Form, Title, Subtitle, Input, SelectFolder, DownloadButton,
} from './AddTorrentModal.styles';

const AddTorrentModal = ({ setIsDialogOpen }) => {
  const stormContext = useContext(StormContext);
  const { data: { socket } } = stormContext;
  const [torrentHash, setTorrentHash] = useState({ value: '' });
  const [folder, setFolder] = useState(null);
  const dialogRef = useRef(null);
  const sendForm = async (e) => {
    e.preventDefault();
    await downloadTorrent(torrentHash.value, folder);
    setIsDialogOpen(false);
  };

  socket.on('get:folder', (path) => {
    setFolder(path);
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsDialogOpen(false);
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
        <Form onSubmit={sendForm}>
          <Title>Add new torrent</Title>
          <Subtitle>
            Paste a torrent hash, magnet URI or HTTP link and Storm will
            make the rest for you.
          </Subtitle>
          <Input
            type="text"
            autoFocus
            id="torrent"
            name="torrentHash"
            onChange={(e) => { setTorrentHash({ value: e.target.value }); }}
            placeholder="Paste torrent hash, magnet URI or HTTP link"
            autoComplete="off"
            value={torrentHash.value}
          />
          <SelectFolder
            type="text"
            value={folder ? `Save directory: ${folder}` : '📁 Choose save directory'}
            onClick={() => socket.emit('set-directory')}
          />
          <DownloadButton type="submit" value="Download" disabled={!torrentHash.value || !folder} />
        </Form>
      </DialogContent>
    </Dialog>
  );
};

AddTorrentModal.propTypes = {
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default AddTorrentModal;
