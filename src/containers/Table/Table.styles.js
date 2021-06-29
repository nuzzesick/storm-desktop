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
    font-weight: 600;
    font-size: 14px;
  };
`;
