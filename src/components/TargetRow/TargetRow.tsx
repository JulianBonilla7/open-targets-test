import { PropsWithChildren, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ExternalLink from "../ExternalLink/ExternalLink";
import { TARGET_PROFILE_URL } from "../../constants";
import { ShortTarget } from "../../types";
import styles from "./TargetRow.module.css";

export type TargetRowProps = {
  target: ShortTarget;
  score: number;
  index: number;
};

const TargetRow = ({
  target,
  score,
  index,
  children,
}: PropsWithChildren<TargetRowProps>) => {
  const [expanded, setExpanded] = useState(false);

  const onChange = () => {
    setExpanded(!expanded);
  };

  const handlerLabel = expanded ? "-" : "+";
  return (
    <>
      <tr className={styles.row}>
        <td className="uk-background-primary uk-light">
          <label className={styles.handler} htmlFor={`handle${index}`}>
            {handlerLabel}
          </label>
        </td>
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
      <tr
        className={classNames(
          styles.row,
          styles.expandable,
          !expanded && styles.hidden
        )}
      >
        <td className={styles.cell} colSpan={4}>
          <input
            type="checkbox"
            checked={expanded}
            onChange={onChange}
            name="collapse"
            className={styles.collapse}
            id={`handle${index}`}
          />
          <div className={styles.content}>{children}</div>
        </td>
      </tr>
    </>
  );
};

TargetRow.propTypes = {
  target: PropTypes.object,
  score: PropTypes.number,
  index: PropTypes.number,
};

export default TargetRow;
