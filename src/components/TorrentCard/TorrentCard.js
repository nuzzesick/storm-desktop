import PropTypes from 'prop-types';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dayjs from 'dayjs';
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

const circularStyles = {
  path: {
    stroke: Colors.HIGHLIGHT1,
  },
  text: {
    fill: 'white',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
};

const TorrentCard = ({ torrent }) => (
  <Card>
    <TopContent>
      <MainInfoContent>
        <TorrentName>{torrent.name}</TorrentName>
        {
          torrent.paused ? (
            <ProgressText>Paused</ProgressText>
          ) : (
            <ProgressText>{torrent.done ? 'Completed' : `${msToTime(torrent.timeRemaining)} remaining`}</ProgressText>
          )
        }
      </MainInfoContent>
      {
        !torrent.paused && (
          <ProgressBarContainer>
            <CircularProgressbar
              value={calcPercentage(torrent.progress)}
              text={calcPercentage(torrent.progress)}
              styles={circularStyles}
            />
          </ProgressBarContainer>
        )
      }
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

TorrentCard.propTypes = {
  torrent: PropTypes.shape({
    name: PropTypes.string,
    progress: PropTypes.number,
    done: PropTypes.bool,
    timeRemaining: PropTypes.number,
    numPeers: PropTypes.number,
    date: PropTypes.string,
    length: PropTypes.number,
    paused: PropTypes.bool,
  }).isRequired,
};

export default TorrentCard;
