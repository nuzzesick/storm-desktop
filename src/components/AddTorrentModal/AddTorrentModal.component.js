import PropTypes from 'prop-types';
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import StormContext from '../../context/Storm.context';
import { downloadTorrent } from '../../api/torrents';
import {
  Dialog,
  DialogContent,
  Form,
  Title,
  Subtitle,
  InputContainer,
  IconContainer,
  MagnetIcon,
  Input,
  SelectFolderContainer,
  SelectFolderInput,
  FolderIcon,
  DownloadButton,
} from './AddTorrentModal.styles';

const AddTorrentModal = ({ setIsDialogOpen }) => {
  const stormContext = useContext(StormContext);
  const { data: { socket } } = stormContext;
  const [torrentHash, setTorrentHash] = useState({ value: '' });
  const [folder, setFolder] = useState('');
  const dialogRef = useRef(null);
  const torrentInput = useRef(null);
  const sendForm = async (e) => {
    e.preventDefault();
    const res = await downloadTorrent(torrentHash.value, folder);
    if (res.message === 'Invalid torrent') {
      console.log('invalid torrent');
    }
    setIsDialogOpen(false);
  };

  socket.on('get:folder', (path) => {
    setFolder(path);
  });

  const setFocusOnTorrentInput = () => {
    torrentInput.current.focus();
  };

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
          <InputContainer>
            <IconContainer type="button" onClick={setFocusOnTorrentInput}>
              <MagnetIcon />
            </IconContainer>
            <Input
              type="text"
              autoFocus
              id="torrent"
              name="torrentHash"
              onChange={(e) => { setTorrentHash({ value: e.target.value }); }}
              placeholder="Paste torrent hash, magnet URI or HTTP link"
              autoComplete="off"
              value={torrentHash.value}
              ref={torrentInput}
            />
          </InputContainer>
          <InputContainer>
            <SelectFolderContainer type="button" onClick={() => { socket.emit('set-directory'); }}>
              <FolderIcon />
            </SelectFolderContainer>
            <SelectFolderInput
              type="text"
              onClick={() => socket.emit('set-directory')}
              placeholder="Choose download directory"
              readOnly
              value={folder}
            />
          </InputContainer>
          {/* <DownloadButton type="submit" value="Download" disabled={!torrentHash.value || !folder} /> */}
          <DownloadButton type="submit" value="Download" />
        </Form>
      </DialogContent>
    </Dialog>
  );
};

AddTorrentModal.propTypes = {
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default AddTorrentModal;
