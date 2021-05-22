import React, { useState, useEffect } from 'react';

import {
  AllTorrentsIcon,
  DownloadTorrentsIcon,
  PauseTorrentsIcon,
  SeedingTorrentsIcon,
  CompletedTorrentsIcon,
  ListContainer,
  StatusButton,
  NavBarContentContainer,
  StatusTextContent,
  TitleTextContent,
  CategoryButton,
  ScrollBox,
} from './Navbar.styles';

import categoriesList from './Navbar.utils';

const Navbar = () => {
  const statusList = [
    { id: 'all', label: 'All', icon: <AllTorrentsIcon /> },
    { id: 'downloading', label: 'Downloading', icon: <DownloadTorrentsIcon /> },
    { id: 'seeding', label: 'Seeding', icon: <SeedingTorrentsIcon /> },
    { id: 'paused', label: 'Paused', icon: <PauseTorrentsIcon /> },
    { id: 'completed', label: 'Completed', icon: <CompletedTorrentsIcon /> },
  ];

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList(categoriesList);
  }, [categoriesList]);

  return (
    <NavBarContentContainer>
      <ListContainer>
        <TitleTextContent>STATUS</TitleTextContent>
        {statusList.map((item) => (
          <StatusButton key={item.id}>
            {item.icon}
            <StatusTextContent>{item.label}</StatusTextContent>
          </StatusButton>
        ))}
      </ListContainer>
      <ListContainer>
        <TitleTextContent>CATEGORIES</TitleTextContent>
        <ScrollBox>
          {categoryList.map((item) => (
            <CategoryButton key={item.id}>
              <StatusTextContent>{item.label}</StatusTextContent>
            </CategoryButton>
          ))}
        </ScrollBox>
      </ListContainer>
    </NavBarContentContainer>
  );
};

export default Navbar;
