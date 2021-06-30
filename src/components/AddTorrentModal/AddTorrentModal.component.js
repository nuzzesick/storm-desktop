import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { downloadTorrent } from '../../api/torrents';
import {
  Dialog, Form, Title, Subtitle, Input, DownloadButton,
} from './AddTorrentModal.styles';

const AddTorrentModal = ({ setIsDialogOpen }) => {
  const [torrentHash, setTorrentHash] = useState('');
  const dialogRef = useRef(null);
  const sendForm = (e) => {
    e.preventDefault();
    downloadTorrent(torrentHash);
    setTimeout(() => {
      setIsDialogOpen(false);
    }, 2000);
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
    <Dialog ref={dialogRef}>
      <Form onSubmit={sendForm}>
        <Title>Add new torrent</Title>
        <Subtitle>
          Paste a torrent hash, magnet link or http link and Storm will
          make the rest for you.
        </Subtitle>
        <Input
          type="text"
          autoFocus
          id="torrent"
          onChange={(e) => { setTorrentHash(e.target.value); }}
          placeholder="Paste torrent hash, magnet link or http link"
          autoComplete="off"
          value={torrentHash}
        />
        <DownloadButton type="submit" value="Download" disabled={!torrentHash} />
      </Form>
    </Dialog>
  );
};

AddTorrentModal.propTypes = {
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default AddTorrentModal;
