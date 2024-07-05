import { Sunburst } from '@ant-design/plots';
import React from 'react';

const Playground = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json',
    },
    valueField: 'sum',
    label: {
      text: 'name',
      transform: [
        {
          type: 'overflowHide',
        },
      ],
    },
    interaction: {
      drillDown: {
        breadCrumb: {
          rootText: 'Hasnat',
          style: {
            fontSize: '32px',
            fill: '#333',
          },
          active: {
            fill: 'red',
          },
        },
        fixedColor: false,
      },
    },
    state: {
      active: { zIndex: 2, stroke: 'red' },
      inactive: { zIndex: 1, stroke: '#fff' },
    },
    // Adjust the size of the chart using Tailwind CSS classes for responsiveness
    className: 'w-full h-96 lg:h-600', // Responsive width and height classes
  };

  return <Sunburst {...config} />;
};

export default Playground;
