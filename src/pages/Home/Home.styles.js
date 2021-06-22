import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const HomePageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${Colors.BASE_DARK1};
`;

export const AnimatedGradient = styled.div`
  background: linear-gradient(50deg, #37b0a9, #1f49b4);
  background-size: 150% 150%;
  width: 200px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 4px;

  animation: AnimationName 2s ease infinite;

  @keyframes AnimationName {
    0% {
      background-position: 0% 81%;
    }
    50% {
      background-position: 100% 20%;
    }
    100% {
      background-position: 0% 81%;
    }
  }
`;
