import styled from 'styled-components';

import Colors from '../../commons/Colors';

import Vectors from '../../commons/Vectors';

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #020202d1;
  transition: 0.3s;
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 18rem;
  background-color: ${Colors.BASE_DARK2};
  border-radius: 8px;
  box-shadow: 0px 6px 20px #00000033;
  margin: auto;
  margin-left: 28%;
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
  margin-bottom: 0.6rem;
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.HIGHLIGHT4};
  margin-bottom: 2.6rem;
  line-height: 24px;x
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: ${Colors.NEUTRAL_WHITE};
  cursor: pointer;
  margin-bottom: 0.6rem;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${Colors.NEUTRAL_WHITE};
  border-radius: 3px;
  margin-right: 0.3rem;
`;

export const CompletedIcon = styled(Vectors.completedTorrents)`
  width: 0.65rem;
  stroke: ${Colors.HIGHLIGHT1};
  path {
    stroke-width: 4;
  }
`;

export const DeleteButton = styled.input`
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
