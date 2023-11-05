import PropTypes from "prop-types";

import { BarChart } from "./BarChart";
import { RadarChart } from "./RadarChart";
import { ScoredComponent } from "../../graphql/queries/schema/types";
import { toTitleCase } from "../../utils";

export type ChartProps = {
  type: string;
  symbol: string;
  scores: ScoredComponent[];
};

const Chart = ({ type, symbol, scores }: ChartProps) => {
  const title = `Data Type Scores: ${symbol} and lung carcinoma`;
  const formattedScores = scores.map((item) => ({
    label: toTitleCase(item.id),
    value: item.score,
  }));

  return (
    <div className="uk-flex uk-flex-middle uk-flex-column">
      <h4>{title}</h4>
      {type === 'bar' && <BarChart data={formattedScores}/>}
      {type === 'radar' && <RadarChart data={formattedScores}/>}
    </div>
  );
};

Chart.propTypes = {
  type: PropTypes.string,
  symbol: PropTypes.string,
  scores: PropTypes.array,
};

export default Chart;
