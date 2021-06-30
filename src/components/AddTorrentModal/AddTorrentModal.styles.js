import styled from 'styled-components';

import Colors from '../../commons/Colors';

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

export const Input = styled.input`

`;

export const Button = styled.button`

`;