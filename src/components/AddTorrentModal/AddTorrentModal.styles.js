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
  width: 60%;
  height: 25rem;
  background-color: ${Colors.BASE_DARK2};
  border-radius: 8px;
  box-shadow: 0px 6px 20px #00000033;
  margin: auto;
  margin-left: 25%;
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
  line-height: 24px;
  width: 75%;
`;

export const TorrentValidationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${Colors.BASE_DARK1};
  width: 75%;
  height: 75%;
  transition: 0.4s;
  border-radius: 3px;
  border: 2px solid ${Colors.INPUT_DARK2};
  margin-bottom: 0.6rem;
  &:hover {
    background: ${Colors.INPUT_DARK2};
    border: 2px solid ${Colors.INPUT_DARK2};
  }
`;

export const InputContainerError = styled(InputContainer)`
  border: 2px solid #d94a4a;
  &:hover {
    background: ${Colors.INPUT_DARK2};
    border: 2px solid #d94a4a;
  }
  svg {
    fill: #d94a4a;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.NEUTRAL_WHITE};
  padding: 0.6rem 0.8rem;
  cursor: text;
  width: 100%;
  &:hover {
    border: none;
    outline: 0;
  }
`;

export const IconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.6rem 0 1rem;
  background: ${Colors.INPUT_DARK1};
  border-right: 2px solid ${Colors.INPUT_DARK2};
  height: 100%;
  cursor: pointer;
  &:focus {
    outline: 0;
    border: none;
    background: ${Colors.INPUT_DARK1};
  }
`;

export const MagnetIcon = styled(Vectors.magnetIcon)`
  fill: ${Colors.HIGHLIGHT1};
  width: 0.8rem;
  margin-right: 0.4rem;
`;

export const SelectFolderContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.6rem 0 1rem;
  background: ${Colors.INPUT_DARK1};
  border-right: 2px solid ${Colors.INPUT_DARK2};
  height: 100%;
  cursor: pointer;
  &:focus {
    outline: 0;
    border: none;
    background: ${Colors.INPUT_DARK1};
  }
`;

export const SelectFolderInput = styled.input`
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.NEUTRAL_WHITE};
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    border: none;
    outline: 0;
  }
`;

export const FolderIcon = styled(Vectors.folderIcon)`
  fill: ${Colors.HIGHLIGHT1};
  width: 0.8rem;
  margin-right: 0.4rem;
`;

export const LoadingContainer = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  margin: -0.6rem 0 0 1rem;
`;

export const DownloadButton = styled.input`
  display: flex;
  margin-top: 0.8rem;
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
  &:focus {
    background: ${Colors.HIGHLIGHT1};
  }
`;

export const SnackBar = styled.div`
  position: fixed;
  background: #d94a4a;
  margin: auto;
  width: 30%;
  padding: 0.4rem;
  left: 0;
  right: 0;
  bottom: 10%;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;
