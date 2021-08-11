import PropTypes from 'prop-types';
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import StormContext from '../../context/Storm.context';
import { downloadTorrent } from '../../services/torrents';
import Loading from '../Loading/Loading';
import {
  Dialog,
  DialogContent,
  Form,
  Title,
  Subtitle,
  TorrentValidationContainer,
  InputContainer,
  IconContainer,
  InputContainerError,
  MagnetIcon,
  Input,
  SelectFolderContainer,
  SelectFolderInput,
  FolderIcon,
  DownloadButton,
  LoadingContainer,
  SnackBar,
} from './AddTorrentModal.styles';

const AddTorrentModal = ({ setIsDialogOpen }) => {
  const stormContext = useContext(StormContext);
  const { data: { socket, downloadsDirectory } } = stormContext;
  const [torrentHash, setTorrentHash] = useState({ value: '' });
  const [isValidTorrent, setIsValidTorrent] = useState(false);
  const [doingValidation, setDoingValidation] = useState(null);
  const [error, setError] = useState(false);
  const [folder, setFolder] = useState(downloadsDirectory);
  const dialogRef = useRef(null);
  const torrentInput = useRef(null);
  const isReadyToDownload = isValidTorrent === true || isValidTorrent === false || !folder;
  const sendForm = async (e) => {
    e.preventDefault();
    const res = await downloadTorrent(torrentHash.value, folder);
    if (res.status === 'error') {
      setError(res.message);
    } else {
      setIsDialogOpen(false);
    }
  };

  socket.on('get:folder', (path) => {
    setFolder(path);
  });

  socket.on('set:valid-torrent', (torrent) => {
    setIsValidTorrent(torrent);
    setDoingValidation(false);
  });

  const handleTorrentValidation = (e) => {
    setError(false);
    setDoingValidation(true);
    setTorrentHash({ value: e.target.value });
    if (e.target.value !== '') {
      socket.emit('check:valid-torrent', e.target.value);
    } else {
      setDoingValidation(false);
      setIsValidTorrent(false);
    }
  };

  useEffect(() => {
    if (doingValidation) {
      setIsValidTorrent(true);
    }
  }, [doingValidation]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

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

  const inputContainerContent = (
    <>
      <IconContainer type="button" onClick={setFocusOnTorrentInput}>
        <MagnetIcon />
      </IconContainer>
      <Input
        type="text"
        autoFocus
        id="torrent"
        name="torrentHash"
        onChange={handleTorrentValidation}
        placeholder="Paste torrent hash, magnet URI or HTTP link"
        autoComplete="off"
        value={torrentHash.value}
        ref={torrentInput}
      />
    </>
  );

  return (
    <Dialog>
      <DialogContent ref={dialogRef}>
        <Form onSubmit={sendForm}>
          <Title>Add new torrent</Title>
          <Subtitle>
            Paste a torrent hash, magnet URI or HTTP link and Storm will
            make the rest for you.
          </Subtitle>
          <TorrentValidationContainer>
            {
              !isValidTorrent && doingValidation !== null ? (
                <InputContainerError>
                  {inputContainerContent}
                </InputContainerError>
              ) : (
                <InputContainer>
                  {inputContainerContent}
                </InputContainer>
              )
            }
            {
              doingValidation && (
                <LoadingContainer>
                  <Loading />
                </LoadingContainer>
              )
            }
          </TorrentValidationContainer>
          <InputContainer>
            <SelectFolderContainer type="button" onClick={() => { socket.emit('set:directory'); }}>
              <FolderIcon />
            </SelectFolderContainer>
            <SelectFolderInput
              type="text"
              onClick={() => { socket.emit('set:directory'); }}
              placeholder="Choose download directory"
              readOnly
              value={folder}
            />
          </InputContainer>
          <DownloadButton type="submit" value="Download" disabled={isReadyToDownload} />
        </Form>
      </DialogContent>
      {error && (
        <SnackBar>
          {error}
        </SnackBar>
      )}
    </Dialog>
  );
};

AddTorrentModal.propTypes = {
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default AddTorrentModal;
