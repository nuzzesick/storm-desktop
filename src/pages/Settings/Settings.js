import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import StormContext from '../../context/Storm.context';
import {
  Container,
  TopContainer,
  BackButtonContainer,
  ActionButton,
  BackIcon,
  DropdownContainer,
  DropdownButton,
  // DownArrowIcon,
  AboutContainer,
  Content,
  SettingContainer,
  Directory,
  DirectoryButton,
  AboutUsModal,
  AboutUsModalContent,
  AboutUsTopContent,
  AboutUsTitle,
  CloseIcon,
  AboutUsContent,
  ContributeButton,
  StormLogo,
  GitHubIcon,
} from './Settings.styles';

const Settings = () => {
  const stormContext = useContext(StormContext);
  const { data: { downloadsDirectory }, actions: { changeDownloadsDirectory } } = stormContext;
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <TopContainer>
        <BackButtonContainer>
          <ActionButton>
            <Link to="/">
              <BackIcon />
              Back
            </Link>
          </ActionButton>
        </BackButtonContainer>
        <DropdownContainer>
          Settings:
          <DropdownButton type="button">
            General
            {/* <DownArrowIcon /> */}
          </DropdownButton>
        </DropdownContainer>
        <AboutContainer>
          <ActionButton onClick={handleModal}>About us</ActionButton>
        </AboutContainer>
      </TopContainer>
      <Content>
        <SettingContainer>
          Downloads folder:
          {downloadsDirectory && <Directory>{downloadsDirectory}</Directory>}
          <DirectoryButton type="button" onClick={changeDownloadsDirectory}>{downloadsDirectory ? 'Change directory' : 'Set directory'}</DirectoryButton>
        </SettingContainer>
      </Content>
      {
        modalOpen && (
          <AboutUsModal>
            <AboutUsModalContent>
              <AboutUsTopContent>
                <AboutUsTitle>
                  <StormLogo />
                  About us
                </AboutUsTitle>
                <ActionButton onClick={handleModal}>
                  <CloseIcon />
                </ActionButton>
              </AboutUsTopContent>
              <AboutUsContent>
                <span>
                  Storm comes with the idea of
                  {' '}
                  <b>change the way we see torrent clients</b>
                  , because all of them always have those typical tables with a
                  lot of data that most of the regular users doesn&apos;t understand
                  it all, including us.
                  <br />
                  We tried to put just the necessary features with a beautiful UI/UX.
                  <br />
                  <br />
                  Storm is an open source project, so if you want to help us to build the
                  best torrent client ever, this is the best time for you.
                  <br />
                  <br />
                  <br />
                </span>
                <ContributeButton href="https://github.com/nuzzesick/storm-desktop" target="_blank" rel="noreferrer">
                  <GitHubIcon />
                  Start contributing
                </ContributeButton>
              </AboutUsContent>
            </AboutUsModalContent>
          </AboutUsModal>
        )
      }
    </Container>
  );
};

export default Settings;
