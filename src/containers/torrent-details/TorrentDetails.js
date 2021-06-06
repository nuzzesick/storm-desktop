import React, { useState } from 'react';

import {
  TorrentDetailsContainer,
  DownloadProgressContainer,
  ProgressCircle,
  ProgressText,
  TorrentSpeedChart,
  SpeedChartContainer,
  DownloadDetailsContainer,
  DetailContainer,
  DetailContent,
  DetailValue,
} from './TorrentDetails.styles';

export const TorrentDetails = () => {
  const [downloadCircleProgress, setDownloadCircleProgress] = useState(630);
  const [downloadNumberProgress, setDownloadNumberProgress] = useState(0);

  const handleDownloadProgress = () => {
    if (downloadNumberProgress < 100) {
      setDownloadCircleProgress(downloadCircleProgress - 6.3);
      setDownloadNumberProgress(downloadNumberProgress + 1);
    }
  };

  return (
    <TorrentDetailsContainer>
      <SpeedChartContainer>
        <TorrentSpeedChart />
      </SpeedChartContainer>
      <DownloadProgressContainer>
        <ProgressCircle downloadProgress={downloadCircleProgress} />
        <ProgressText>{`${downloadNumberProgress}%`}</ProgressText>
      </DownloadProgressContainer>
      <DownloadDetailsContainer>
        <DetailContainer>
          <DetailContent>Active</DetailContent>
          <DetailValue>30min</DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailContent>ETA</DetailContent>
          <DetailValue>30min</DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailContent>Seeds</DetailContent>
          <DetailValue>2345</DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailContent>Peers</DetailContent>
          <DetailValue>2345</DetailValue>
        </DetailContainer>
      </DownloadDetailsContainer>
    </TorrentDetailsContainer>
  );
};

export default TorrentDetails;
