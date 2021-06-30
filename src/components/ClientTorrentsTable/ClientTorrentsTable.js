/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useRef,
  useContext,
} from 'react';
import { ArrowDownward } from '@material-ui/icons';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';
import { MTableBodyRow } from 'material-table';

import Colors from '../../commons/Colors';

import { TorrentsTable } from './ClientTorrentsTable.styles';
import StormContext from '../../context/Storm.context';

export const ClientTorrentsTable = () => {
  const stormContext = useContext(StormContext);

  const tableRef = useRef({});

  const [hoveringOver, setHoveringOver] = useState(null);
  const currentTorrentSearch = useMemo(
    () => stormContext.data.torrentSearch,
    [stormContext.data.torrentSearch]
  );

  useEffect(() => {
    const currentRef = tableRef?.current;

    currentRef?.dataManager.changeSearchText(currentTorrentSearch);
    currentRef?.setState({
      ...currentRef?.dataManager?.getRenderState(),
      searchText: currentTorrentSearch,
    });
  }, [currentTorrentSearch]);

  const theme = createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          borderBottom: 'none',
        },
        body: {
          color: Colors.FONT1,
        },
      },
    },
  });

  const handleRowHover = (propsData) => () => {
    setHoveringOver(propsData.data.tableData.id);
  };
  const handleRowHoverLeave = () => setHoveringOver(null);

  const tableData = [
    {
      name: 'Fight club(1999)',
      progress: 20.4,
      size: 1631,
      seeds: 2345,
      peers: 4954,
      download_speed: 500,
      upload_speed: 200,
      eta: 20,
      category: 'Movies',
    },
    {
      name: 'The prestige(2006)',
      progress: 60.8,
      size: 2421,
      seeds: 245,
      peers: 954,
      download_speed: 600,
      upload_speed: 340,
      eta: 10,
      category: 'Movies',
    },
    {
      name: 'Interstellar(2004)',
      progress: 10.4,
      size: 1891,
      seeds: 7345,
      peers: 2954,
      download_speed: 800,
      upload_speed: 430,
      eta: 45,
      category: 'Movies',
    },
    {
      name: 'Breaking bad S03E04',
      progress: 23,
      size: 691,
      seeds: 345,
      peers: 154,
      download_speed: 200,
      upload_speed: 80,
      eta: 20,
      category: 'Tv Show',
    },
  ];

  const tableColumns = [
    { title: 'Name', field: 'name' },
    { title: 'Progress', field: 'progress' },
    { title: 'Size', field: 'size' },
    { title: 'Seeds', field: 'seeds' },
    { title: 'Peers', field: 'peers' },
    { title: 'Download speed', field: 'download_speed' },
    { title: 'Upload speed', field: 'upload_speed' },
    { title: 'ETA', field: 'eta' },
    { title: 'Category', field: 'category' },
  ];

  const tableOptions = useMemo(
    () => ({
      paging: false,
      padding: 'dense',
      tableLayout: 'auto',
      addRowPosition: 'first',
      toolbar: false,
      header: true,
      loadingType: 'linear',
      headerStyle: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: Colors.NEUTRAL_WHITE,
        backgroundColor: Colors.BASE_DARK1,
        borderBottom: `1px solid ${Colors.FONT1}`,
        height: '56px',
      },
      selection: false,
      search: false,
      draggable: false,
      sorting: false,
      thirdSortClick: false,
      rowStyle: (rowData) => ({
        color:
          rowData.tableData.id === hoveringOver
            ? Colors.NEUTRAL_WHITE
            : Colors.FONT1,
        backgroundColor:
          rowData.tableData.id === hoveringOver
            ? Colors.HOVER_DARK
            : Colors.BASE_DARK1,
        height: '48px',
      }),
    }),
    [hoveringOver]
  );

  const tableComponents = useMemo(
    () => ({
      Row: (props) => (
        <MTableBodyRow
          {...props}
          onMouseEnter={handleRowHover(props)}
          onMouseLeave={handleRowHoverLeave}
        />
      ),
      Container: (props) => <Paper {...props} elevation={0} />,
    }),
    []
  );

  const tableIcons = {
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
  };

  return (
    <ThemeProvider theme={theme}>
      <TorrentsTable
        data={tableData}
        columns={tableColumns}
        components={tableComponents}
        options={tableOptions}
        icons={tableIcons}
        tableRef={tableRef}
      />
    </ThemeProvider>
  );
};

export default ClientTorrentsTable;
