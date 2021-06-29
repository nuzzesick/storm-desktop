import React, { useContext, useEffect } from 'react';
import StormContext from '../../context/Storm.context';
import { formatBytes, msToTime } from '../../utils';
import { TableContainer } from './Table.styles';
import { tableRows } from './Table.utils';

const Table = () => {
  const { data: { torrentsList = [] } } = useContext(StormContext);
  return (
    <TableContainer>
      <thead>
        <tr>
          {
          tableRows.map((row) => (
            <th key={`table-row-${row.id}`}>{row.text}</th>
          ))
        }
        </tr>
      </thead>
      <tbody>
        {
          torrentsList.length > 0 && torrentsList.map((torrent) => (
            <tr key={`table-row-${torrent.name}`}>
              <>
                <td>{torrent.name}</td>
                <td>
                  {(torrent.progress * 100).toFixed(2)}
                  %
                </td>
                <td>{formatBytes(torrent.length)}</td>
                <td>{torrent.numPeers}</td>
                <td>{formatBytes(torrent.downloadSpeed)}</td>
                <td>{formatBytes(torrent.uploadSpeed)}</td>
                <td>{torrent.done ? 'Done' : msToTime(torrent.timeRemaining)}</td>
                <td>{(torrent.ratio * 100).toFixed(2)}</td>
              </>
            </tr>
          ))
        }
      </tbody>
    </TableContainer>
  );
};

export default Table;
