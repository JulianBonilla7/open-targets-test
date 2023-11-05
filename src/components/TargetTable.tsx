import React from "react";
import PropTypes from "prop-types";
import { AssociatedTarget } from "../types";

const TargetTable = ({ data }: { data: AssociatedTarget[] }) => {
  return (
    <table className="uk-table">
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
            <td>{target.approvedSymbol}</td>
            <td>{target.approvedName}</td>
            <td>{score}</td>
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
