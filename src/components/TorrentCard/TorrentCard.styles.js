import styled from 'styled-components';
import Colors from '../../commons/Colors';

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  border: 1px solid #3c3c3c;
  border-radius: 8px;
  transition: 0.4s;
  background-color: #131313;
  color: ${Colors.NEUTRAL_WHITE};
  cursor: pointer;
  margin-bottom: 1rem;
  align-items: initial;
  text-align: left;
  &:hover {
    background-color: #0e0e0e;
  }
  &:focus {
    outline: 0;
    border: 1px solid ${Colors.HIGHLIGHT1};
    background-color: #0e0e0e;
  }
  ${({ active }) => active && `
    background-color: #0e0e0e;
    border: 1px solid ${Colors.HIGHLIGHT1};
  `}
  ${({ hidden }) => hidden && `
    display: none;
  `}
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 1.8rem 1.4rem 1.8rem;
`;

export const MainInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TorrentName = styled.div`
  font-weight: 600;
  font-size: 1.05rem;
  width: 18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.6rem;
  @media (min-width: 1100px) {
    width: 20rem;
  }
  @media (min-width: 1700px) {
    width: 22rem;
  }
  @media (min-width: 2100px) {
    width: 24rem;
  }
`;

export const ProgressText = styled.div`
  font-size: 0.9rem;
`;

export const ProgressBarContainer = styled.div`
  width: 2.2rem;
  height: 2.2rem;
`;

export const BottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1.8rem;
  border-top: 1px solid #3c3c3c;
`;

export const TorrentInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TorrentInfo = styled.p`
  font-size: 0.85rem;
`;

export const DateText = styled.div`
  font-size: 0.85rem;
  color: #c7c7c7;
`;
