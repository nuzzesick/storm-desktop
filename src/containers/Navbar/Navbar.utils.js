import React from 'react';

import {
  AllTorrentsIcon,
  DownloadTorrentsIcon,
  PauseTorrentsIcon,
  SeedingTorrentsIcon,
  CompletedTorrentsIcon,
} from './Navbar.styles';

const categoriesList = [
  { id: 'movies', label: 'Movies' },
  { id: 'books', label: 'Books' },
  { id: 'games', label: 'Games' },
  { id: 'tv-shows', label: 'Tv Shows' },
  { id: 'documents', label: 'Documents' },
  { id: 'documents2', label: 'Documents2' },
  { id: 'documents3', label: 'Documents3' },
  { id: 'documents4', label: 'Documents4' },
  { id: 'documents5', label: 'Documents5' },
  { id: 'documents6', label: 'Documents6' },
  { id: 'documents7', label: 'Documents7' },
];

const statusList = (activeFilter) => (
  [
    {
      id: 'all', label: 'All', icon: <AllTorrentsIcon />, active: activeFilter === 'all',
    },
    {
      id: 'downloading', label: 'Downloading', icon: <DownloadTorrentsIcon />, active: activeFilter === 'downloading',
    },
    {
      id: 'seeding', label: 'Seeding', icon: <SeedingTorrentsIcon />, active: activeFilter === 'seeding',
    },
    {
      id: 'paused', label: 'Paused', icon: <PauseTorrentsIcon />, active: activeFilter === 'paused',
    },
    {
      id: 'completed', label: 'Completed', icon: <CompletedTorrentsIcon />, active: activeFilter === 'completed',
    },
  ]
);

export { categoriesList, statusList };
