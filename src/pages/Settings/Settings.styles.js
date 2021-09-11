import styled from 'styled-components';
import Vectors from '../../commons/Vectors';
import Colors from '../../commons/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 10rem;
  transition: 0.3s;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    text-decoration: none;
  }
`;

export const BackButtonContainer = styled.div`
  width: calc(100% / 3);
`;

export const ActionButton = styled.span`
  display: flex;
  align-items: center;
  color: ${Colors.NEUTRAL_WHITE};
  margin: -0.5rem -1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
  font-size: 1.1rem;
  width: fit-content;
  &:hover {
    background: ${Colors.HIGHLIGHT2};
  }
  a {
    color: ${Colors.NEUTRAL_WHITE};
  }
`;

export const BackIcon = styled(Vectors.backIcon)`
  width: 1rem;
  fill: ${Colors.NEUTRAL_WHITE};
  margin-right: 0.6rem;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${Colors.HIGHLIGHT4};
  width: calc(100% / 3);
  justify-content: center;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  // cursor: pointer;
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
  margin-left: 0.6rem;
`;

export const DownArrowIcon = styled(Vectors.downArrowIcon)`
  width: 0.4rem;
  fill: ${Colors.NEUTRAL_WHITE};
  margin: 0.2rem 0 0 0.8rem;
`;

export const AboutContainer = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4rem 0;
`;

export const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 2rem;
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
  width: 100%;
  border-radius: 2px;
  margin: 0.6rem 0;
  background-color: #232323;
  font-size: 1rem;
`;

export const Directory = styled.div`
  font-size: 1.1rem;
  color: ${Colors.NEUTRAL_WHITE};
  font-size: 1rem;
  margin-left: 1rem;
`;

export const DirectoryButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${Colors.HIGHLIGHT1};
  border-radius: 2px;
  margin: 1rem 0;
  background-color: #232323;
  cursor: pointer;
  margin-left: 1rem;
`;

export const AboutUsModal = styled.div`
  position: fixed;
  background-color: #000000c7;
  height: 100%;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const AboutUsModalContent = styled.div`
  width: calc(100% - 50rem);
  padding: 4rem 8rem;
  background: ${Colors.BASE_DARK1};
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #1010108a;
  color: ${Colors.NEUTRAL_WHITE};
  margin: 8% auto;
`;

export const AboutUsTopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const AboutUsTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${Colors.NEUTRAL_WHITE};
  display: flex;
  align-items: center;
  margin: 0;
`;

export const CloseIcon = styled(Vectors.closeIcon)`
  width: 1rem;
  fill: ${Colors.NEUTRAL_WHITE};
`;

export const AboutUsContent = styled.div`
  margin-top: 1.6rem;
  display: flex;
  font-size: 1.12rem;
  flex-direction: column;
  color: ${Colors.BASE_DARK4};
  line-height: 1.8rem;
`;

export const ContributeButton = styled.a`
  display: flex;
  align-items: center;
  background-color: ${Colors.HIGHLIGHT2};
  color: ${Colors.NEUTRAL_WHITE};
  width: fit-content;
  padding: 0.2rem 1.2rem;
  font-size: 1.05rem;
  font-weight: 500;
  border-radius: 3px;
  transition: 0.3s;
  &:hover {
    background-color: ${Colors.HIGHLIGHT1};
  }
`;

export const StormLogo = styled(Vectors.logo)`
  width: 1.6rem;
  margin-right: 0.4rem;
`;

export const GitHubIcon = styled(Vectors.githubIcon)`
  width: 0.9rem;
  fill: ${Colors.NEUTRAL_WHITE};
  margin-right: 0.4rem;
`;
