import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { downloadTorrent } from '../../api/torrents';
import {
  Dialog, DialogContent, Form, Title, Subtitle, Input, DownloadButton,
} from './AddTorrentModal.styles';

const AddTorrentModal = ({ setIsDialogOpen }) => {
  const [torrentHash, setTorrentHash] = useState({ value: '' });
  const dialogRef = useRef(null);
  const sendForm = async (e) => {
    e.preventDefault();
    await downloadTorrent(torrentHash.value);
    setIsDialogOpen(false);
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
            Paste a torrent hash, magnet link or http link and Storm will
            make the rest for you.
          </Subtitle>
          <Input
            type="text"
            autoFocus
            id="torrent"
            name="torrentHash"
            onChange={(e) => { setTorrentHash({ value: e.target.value }); }}
            placeholder="Paste torrent hash, magnet URI or http link"
            autoComplete="off"
            value={torrentHash.value}
          />
          <DownloadButton type="submit" value="Download" disabled={!torrentHash.value} />
        </Form>
      </DialogContent>
    </Dialog>
  );
};

AddTorrentModal.propTypes = {
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default AddTorrentModal;
