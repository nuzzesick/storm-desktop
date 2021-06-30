import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 60%;
  height: 40vh;
  top: 0;
  left: 250px;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: ${Colors.BASE_DARK2};
  border-radius: 8px;
  box-shadow: 0px 6px 20px #00000033
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: ${Colors.NEUTRAL_WHITE};
  margin-bottom: 0.8rem;
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.HIGHLIGHT4};
  margin-bottom: 2.6rem;
  line-height: 24px;
  width: 75%;
`;

export const Input = styled.input`
  background: ${Colors.INPUT_DARK1};
  width: 75%;
  padding: 0.8rem 1.2rem;
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.NEUTRAL_WHITE};
  transition: 0.4s;
  border-radius: 3px;
  border: 2px solid ${Colors.INPUT_DARK1};
  &:hover {
    background: ${Colors.INPUT_DARK2};
    border: 2px solid ${Colors.INPUT_DARK2};
  }
  &:focus {
    background: ${Colors.INPUT_DARK};
    border: 2px solid ${Colors.HIGHLIGHT1};
  }
`;

export const DownloadButton = styled.input`
  display: flex;
  margin-top: 0.6rem;
  background: ${Colors.HIGHLIGHT1};
  width: fit-content;
  padding: 0.5rem 3rem;
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.NEUTRAL_WHITE};
  transition: 0.4s;
  border-radius: 3px;
  cursor: pointer;
  &:hover:enabled {
    box-shadow: 0 0 4px ${Colors.HIGHLIGHT1};
  }
  &:disabled {
    background: ${Colors.DISABLED};
    cursor: not-allowed;
    color: ${Colors.DISABLED_TEXT};
  }
`;
