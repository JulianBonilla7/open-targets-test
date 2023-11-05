import PropTypes from "prop-types";
import { AssociatedTarget } from "../../types";
import Tab from "../Tab";
import TargetRow from "../TargetRow";

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
        {data.map(({ target, score }, i) => (
          <TargetRow key={target.id} target={target} score={score} index={i}>
            <Tab
              tabs={[
                { label: "Bar Chart", name: "bar_chart" },
                { label: "Radar Chart", name: "radar_chart" },
              ]}
            >
              <li>tab 1</li>
              <li>tab 2</li>
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
