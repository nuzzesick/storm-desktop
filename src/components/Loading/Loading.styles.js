import styled, { keyframes } from 'styled-components';

import Colors from '../../commons/Colors';

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: sticky;
`;

const skBounce = keyframes`
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
`;

export const DoubleBounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${Colors.BASE_DARK5};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${skBounce} 2.0s infinite ease-in-out;
  animation: ${skBounce} 2.0s infinite ease-in-out;
`;

export const DoubleBounce2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${Colors.BASE_DARK5};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${skBounce} 2.0s infinite ease-in-out;
  animation: ${skBounce} 2.0s infinite ease-in-out;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`;
