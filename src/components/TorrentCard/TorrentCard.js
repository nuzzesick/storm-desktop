import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dayjs from 'dayjs';
import StormContext from '../../context/Storm.context';
import Colors from '../../commons/Colors';
import { formatBytes, msToTime } from '../../utils';
import {
  Card,
  TopContent,
  MainInfoContent,
  TorrentName,
  ProgressText,
  ProgressBarContainer,
  BottomContent,
  TorrentInfoContainer,
  TorrentInfo,
  DateText,
} from './TorrentCard.styles';

const calcPercentage = (value) => ((value * 100).toFixed(0));

// dayjs config
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

const TorrentCard = ({ torrent }) => {
  const {
    data: { torrentSelected },
    actions: { updateTorrentSelected },
  } = useContext(StormContext);
  const circularStyles = {
    path: {
      stroke: !torrent.paused ? Colors.HIGHLIGHT1 : Colors.BASE_DARK5,
    },
    text: {
      fill: 'white',
      fontSize: '1.8rem',
      fontWeight: 'bold',
    },
  };

  return (
    <Card
      type="button"
      active={torrentSelected && torrentSelected.magnetURI === torrent.magnetURI}
      hidden={torrent.hidden}
      onClick={() => {
        setTimeout(() => {
          updateTorrentSelected(torrent);
        }, 1);
      }}
    >
      <TopContent>
        <MainInfoContent>
          <TorrentName>{torrent.name}</TorrentName>
          {
            torrent.paused ? (
              <ProgressText>Paused</ProgressText>
            ) : (
              <ProgressText>
                {
                  torrent.done ? 'Completed' : `${msToTime(torrent.timeRemaining)} remaining | ${formatBytes(torrent.downloadSpeed)}`
                }
              </ProgressText>
            )
          }
        </MainInfoContent>
        <ProgressBarContainer>
          <CircularProgressbar
            value={`${calcPercentage(torrent.progress)}%`}
            text={`${calcPercentage(torrent.progress)}%`}
            styles={circularStyles}
          />
        </ProgressBarContainer>
      </TopContent>
      <BottomContent>
        <TorrentInfoContainer>
          <TorrentInfo>
            {
              !torrent.paused && `Peers: ${torrent.numPeers} | `
            }
            Size:&nbsp;
            {formatBytes(torrent.length)}
          </TorrentInfo>
        </TorrentInfoContainer>
        <DateText>{`Updated ${dayjs(torrent.date).from()}`}</DateText>
      </BottomContent>
    </Card>
  );
};

TorrentCard.propTypes = {
  torrent: PropTypes.shape({
    magnetURI: PropTypes.string,
    name: PropTypes.string,
    progress: PropTypes.number,
    done: PropTypes.bool,
    timeRemaining: PropTypes.number,
    numPeers: PropTypes.number,
    date: PropTypes.string,
    length: PropTypes.number,
    paused: PropTypes.bool,
    hidden: PropTypes.bool,
    downloadSpeed: PropTypes.number,
  }).isRequired,
};

export default TorrentCard;
