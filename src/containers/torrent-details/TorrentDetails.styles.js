import styled from 'styled-components';

import Colors from '../../commons/Colors';

import Vectors from '../../commons/Vectors';

import { SpeedChart } from '../../components/speed-chart/SpeedChart';

export const TorrentDetailsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 30%;
  background-color: ${Colors.BASE_DARK2};
`;

export const DownloadProgressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 210px;
`;

export const ProgressCircle = styled(Vectors.progressCircle)`
  position: relative;
  transform: rotate(270deg);
  width: 100%;
  height: 100%;

  & > circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke: ${Colors.HIGHLIGHT3};
    transform: translate(5px, 5px);
    stroke-linecap: round;
  }

  & > circle:nth-child(2) {
    stroke: ${Colors.HIGHLIGHT1};
    stroke-dasharray: 630px;
    stroke-dashoffset: ${(props) => props.downloadProgress};
  }
`;

export const ProgressText = styled.span`
  position: absolute;
  z-index: 999;
  font-size: 36px;
  color: ${Colors.NEUTRAL_WHITE};
`;

export const TorrentSpeedChart = styled(SpeedChart)``;

export const SpeedChartContainer = styled.div`
  height: 260px;
  width: 40vw;
`;
