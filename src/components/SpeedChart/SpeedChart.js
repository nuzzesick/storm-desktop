import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export const SpeedChart = () => {
  const data = [
    {
      id: 'download speed(Mbs)',
      data: [
        {
          x: 'peak 1',
          y: 1,
        },
        {
          x: 'peak 2',
          y: 5,
        },
        {
          x: 'peak 3',
          y: 10,
        },
        {
          x: 'peak 4',
          y: 7,
        },
        {
          x: 'current',
          y: 15,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      defs={[
        {
          id: 'gradientC',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: '#4A72D9' },
            { offset: 100, color: '#4A72D9', opacity: 0 },
          ],
        },
      ]}
      fill={[{ match: '*', id: 'gradientC' }]}
      colors={{ scheme: 'category10' }}
      theme={{
        textColor: '#8b8b8b',
        fontSize: 11,
      }}
      curve="natural"
      enableArea
      enablePoints={false}
      enableGridX={false}
      enableGridY={false}
      margin={{
        top: 50,
        right: 110,
        bottom: 50,
        left: 60,
      }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      enableSlices="x"
      axisLeft={{
        orient: 'left',
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: [1, 5, 10, 15],
      }}
      useMesh
    />
  );
};

export default SpeedChart;
