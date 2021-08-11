import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StormContext from '../../context/Storm.context';
import {
  Container,
  TopContainer,
  BackButton,
  BackIcon,
  DropdownContainer,
  DropdownButton,
  // DownArrowIcon,
  AboutContainer,
  Content,
  SettingContainer,
  Directory,
  DirectoryButton,
} from './Settings.styles';

const Settings = () => {
  const stormContext = useContext(StormContext);
  const { data: { downloadsDirectory }, actions: { changeDownloadsDirectory } } = stormContext;
  return (
    <Container>
      <TopContainer>
        <Link to="/">
          <BackButton>
            <BackIcon />
            Back
          </BackButton>
        </Link>
        <DropdownContainer>
          Settings:
          <DropdownButton type="button">
            General
            {/* <DownArrowIcon /> */}
          </DropdownButton>
        </DropdownContainer>
        <AboutContainer />
      </TopContainer>
      <Content>
        <SettingContainer>
          Downloads folder:
          {downloadsDirectory && <Directory>{downloadsDirectory}</Directory>}
          <DirectoryButton type="button" onClick={changeDownloadsDirectory}>{downloadsDirectory ? 'Change directory' : 'Set directory'}</DirectoryButton>
        </SettingContainer>
      </Content>
    </Container>
  );
};

export default Settings;
