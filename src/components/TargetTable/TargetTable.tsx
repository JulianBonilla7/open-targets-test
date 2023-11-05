import PropTypes from "prop-types";
import { AssociatedTarget } from "../../types";
import ExternalLink from "../ExternalLink/ExternalLink";

const TARGET_PROFILE_URL = "https://platform.opentargets.org/target";

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
        {data.map(({ target, score }) => (
          <tr>
            <td>+</td>
            <td>
              <ExternalLink
                baseUrl={TARGET_PROFILE_URL}
                id={target.id}
                symbol={target.approvedSymbol}
              />
            </td>
            <td>{target.approvedName}</td>
            <td>{score.toFixed(3)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TargetTable.propTypes = {
  data: PropTypes.object,
};

export default TargetTable;
