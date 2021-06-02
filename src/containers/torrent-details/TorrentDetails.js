import React, { useState } from 'react';

import {
  TorrentDetailsContainer,
  DownloadProgressContainer,
  ProgressCircle,
  ProgressText,
  TorrentSpeedChart,
  SpeedChartContainer,
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
    </TorrentDetailsContainer>
  );
};

export default TorrentDetails;
