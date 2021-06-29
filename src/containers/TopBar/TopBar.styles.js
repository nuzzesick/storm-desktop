import styled from 'styled-components';

import Colors from '../../commons/Colors';

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.3rem;
  background-color: ${Colors.BASE_DARK2};
`;

export const TopBarContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 1.125rem;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  outline: 0;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  color: ${Colors.NEUTRAL_WHITE};
  font-weight: 600;
  font-size: 15px;
  padding: 0.55rem 1rem;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 1.2rem;
  &:hover {
    background-color: ${Colors.HIGHLIGHT2};;
  }
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 60%;
  height: 50vh;
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
  width: 20rem;
  input {
    font-weight: 600;
    color: ${Colors.NEUTRAL_WHITE};
    font-size: 14px;
  };
  input:last-child {
    margin: 1rem 0;
    border-radius: 3px;
    padding: 0.4rem 2rem;
    background-color: ${Colors.HIGHLIGHT2};
    cursor: pointer;
  }
  &:hover {
    input:last-child {
      background-color: ${Colors.HIGHLIGHT1};
    }
  }
`;
