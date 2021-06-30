import PropTypes from "prop-types";
import React from 'react';

import { downloadTorrent } from '../../api/torrents';
import { Dialog, Form} from './AddTorrentModal.styles';

const AddTorrentModal = ({ setIsDialogOpen }) => {
    const sendForm = (e) => {
        e.preventDefault();
        const torrentId = e.target[0].value;
        downloadTorrent(torrentId);
        setIsDialogOpen(false)
    }

    return(
        <Dialog>
            <Form onSubmit={sendForm}>
                <input 
                    type="text"
                    id="torrent"
                    placeholder="Enter torrent ID"
                    autoComplete="off"
                />
                <input type="submit" value="Download" />
            </Form>
            <button
                style={{ color: 'white', cursor: 'pointer' }}
                type="button"
                onClick={() => setIsDialogOpen(false)}
            >
                Cancel
            </button>
        </Dialog>
    )
}

AddTorrentModal.propTypes = {
  setIsDialogOpen: PropTypes.func.isRequired
}

export default AddTorrentModal;