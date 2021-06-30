import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin-left: 3%;
  width: 97%;
  th {
    text-align: left;
    color: ${Colors.BASE_LIGHT1};
    padding: 1.4rem 0 1rem 0;
    font-weight: 600;
    font-size: 14px;
  };
  td {
    text-align: left;
    color: ${Colors.BASE_LIGHT2};
    padding: 0.6rem 0;
    font-weight: 500;
    font-size: 14px;
    vertical-align: middle;
  };
`;

export const TorrentNameContainer = styled.td`
  width: 20%;
`;

export const TorrentName = styled.span`
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: ${Colors.BASE_LIGHT2};
  font-weight: 600;
`;

export const ProgressBarContainer = styled.td`
  width: 18%;
`;

export const ProgressBar = styled.div`
  width: 90%;
  height: 1.2rem;
  background: ${Colors.PROGRESS_BAR};
  border-radius: 3px;
`;

export const Progress = styled.div`
  background: ${Colors.HIGHLIGHT1};
  height: 1.2rem;
  border-radius: 3px;
  transition: 0.4s;
`;
