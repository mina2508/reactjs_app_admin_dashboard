import React from 'react';
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
  TrackLineSettings,
} from '@syncfusion/ej2-react-charts';
const SparkLine = ({ color, id, type, height, width, data, currentColor }) => {
  console.log(type);
  // return (
  //   <SparklineComponent
  //     id={id}
  //     height="80px"
  //     width="250px"
  //     data={[
  //       { x: 1, y: 2 },
  //       { x: 2, y: 6 },
  //       { x: 3, y: 8 },
  //       { x: 4, y: 5 },
  //       { x: 5, y: 10 },
  //     ]}
  //     xName="x"
  //     yName="y"
  //     lineWidth={1}
  //     valueType="Numeric"
  //     fill="blue"
  //     type={type}
  //   >
  //     <Inject services={[SparklineTooltip]} />
  //   </SparklineComponent>
  // );
  return (
    <SparklineComponent
      type={type}
      id="sparkline"
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      dataSource={[
        { x: 0, xval: '2005', yval: 20090440 },
        { x: 1, xval: '2006', yval: 20264080 },
        { x: 2, xval: '2007', yval: 20434180 },
        { x: 3, xval: '2008', yval: 21007310 },
        { x: 4, xval: '2009', yval: 21262640 },
        { x: 5, xval: '2010', yval: 21515750 },
        { x: 6, xval: '2011', yval: 21766710 },
        { x: 7, xval: '2012', yval: 22015580 },
        { x: 8, xval: '2013', yval: 22262500 },
        { x: 9, xval: '2014', yval: 22507620 },
      ]}
      fill={color}
      border={{ color: currentColor, width: 5 }}
      xName="xval"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
