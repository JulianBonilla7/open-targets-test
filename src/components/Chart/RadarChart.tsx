import * as d3 from "d3";

import { RadarGrid } from "./RadarGrid";
import { IData } from "../../types";
import {
  RADAR_CHART_MARGIN,
  RADAR_INNER_RADIUS,
  CHART_FILL_COLOR,
  CHART_HEIGHT,
  RADAR_CHART_WIDTH,
  CHART_MAX_SCORE,
} from "../../constants";

type YScale = d3.ScaleRadial<number, number, never>;

type RadarProps = {
  data: IData[];
};

export const RadarChart = ({ data }: RadarProps) => {
  const outerRadius = Math.min(RADAR_CHART_WIDTH, CHART_HEIGHT) / 2 - RADAR_CHART_MARGIN;
  const labels = data.map((d) => d.label);

  // The x scale provides an angle for each variable of the dataset
  const xScale = d3
    .scaleBand()
    .domain(labels)
    .range([0, 2 * Math.PI]);

  // Compute the y scales: 1 scale per variable.
  // Provides the distance to the center.
  const yScales: { [name: string]: YScale } = {};
  labels.forEach((label) => {
    yScales[label] = d3
      .scaleRadial()
      .domain([0, CHART_MAX_SCORE])
      .range([RADAR_INNER_RADIUS, outerRadius]);
  });

  // Compute the main radar shapes, 1 per group
  const lineGenerator = d3.lineRadial();

  const allCoordinates = data.map((d) => {
    const yScale = yScales[d.label];
    const angle = xScale(d.label) ?? 0;
    const radius = yScale(d.value);
    const coordinate: [number, number] = [angle, radius];
    return coordinate;
  });

  // To close the path of each group, the path must finish where it started
  // so add the last data point at the end of the array
  allCoordinates.push(allCoordinates[0]);
  const linePath = lineGenerator(allCoordinates);

  return (
    <svg width={RADAR_CHART_WIDTH} height={CHART_HEIGHT} style={{ overflow: "visible" }}>
      <g transform={"translate(" + RADAR_CHART_WIDTH / 2 + "," + CHART_HEIGHT / 2 + ")"}>
        <RadarGrid outerRadius={outerRadius} xScale={xScale} labels={labels} />
        <path
          d={linePath || ""}
          stroke={CHART_FILL_COLOR}
          strokeWidth={3}
          fill={CHART_FILL_COLOR}
          fillOpacity={0}
        />
      </g>
    </svg>
  );
};
