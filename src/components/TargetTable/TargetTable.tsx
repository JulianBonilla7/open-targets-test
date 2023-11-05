import PropTypes from "prop-types";

import Chart from "../Chart";
import Tab from "../Tab";
import TargetRow from "../TargetRow";
import { AssociatedTarget } from "../../graphql/queries/schema/types";
import { TAB_CONFIG } from "../../constants";

const TargetTable = ({ data }: { data: AssociatedTarget[] }) => {
  return (
    <table className="uk-table uk-table-divider">
      <thead>
        <tr>
          <th></th>
          <th>Approved Symbol</th>
          <th>Gene Name</th>
          <th>Overall Association Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ target, score, datatypeScores }, i) => (
          <TargetRow key={target.id} target={target} score={score} index={i}>
            <Tab tabs={TAB_CONFIG}>
              <li>
                <Chart
                  type="bar"
                  symbol={target.approvedSymbol}
                  scores={datatypeScores}
                />
              </li>
              <li>
                <Chart
                  type="radar"
                  symbol={target.approvedSymbol}
                  scores={datatypeScores}
                />
              </li>
            </Tab>
          </TargetRow>
        ))}
      </tbody>
    </table>
  );
};

TargetTable.propTypes = {
  data: PropTypes.array,
};

export default TargetTable;
