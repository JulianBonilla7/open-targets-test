import * as d3 from 'd3';

import { polarToCartesian } from '../../utils';
import { RADAR_INNER_RADIUS, RADAR_GRID_NUMBER, RADAR_GRID_COLOR } from '../../constants';

type RadarGridProps = {
  outerRadius: number;
  xScale: d3.ScaleBand<string>;
  labels: string[];
};

/*
  A react component that adds a grid background 
  for a radar chart in polar coordinates
  Based on: https://www.react-graph-gallery.com/radar-chart
*/
export const RadarGrid = ({
  outerRadius,
  xScale,
  labels,
}: RadarGridProps) => {
  const lineGenerator = d3.lineRadial();

  // Compute Axes = from center to outer
  const allAxes = labels.map((label, i) => {
    const angle = xScale(label);

    if (angle === undefined) {
      return null;
    }

    const path = lineGenerator([
      [angle, RADAR_INNER_RADIUS],
      [angle, outerRadius],
    ]);

    const labelPosition = polarToCartesian(
      angle - Math.PI / 2,
      outerRadius + 10
    );

    return (
      <g key={i}>
        <path d={path || ''} stroke={RADAR_GRID_COLOR} strokeWidth={0.5} rx={1} />
        <text
          x={labelPosition.x}
          y={labelPosition.y}
          fontSize={12}
          fill={RADAR_GRID_COLOR}
          textAnchor={labelPosition.x > 0 ? 'start' : 'end'}
          dominantBaseline="middle"
        >
          {label}
        </text>
      </g>
    );
  });

  // Compte grid = concentric circles
  const allCircles = [...Array(RADAR_GRID_NUMBER).keys()].map((position, i) => {
    return (
      <circle
        key={i}
        cx={0}
        cy={0}
        r={
          RADAR_INNER_RADIUS +
          (position * (outerRadius - RADAR_INNER_RADIUS)) / (RADAR_GRID_NUMBER - 1)
        }
        stroke={RADAR_GRID_COLOR}
        fill="none"
      />
    );
  });

  return (
    <g>
      {allAxes}
      {allCircles}
    </g>
  );
};
