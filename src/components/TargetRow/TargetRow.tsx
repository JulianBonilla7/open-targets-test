import { PropsWithChildren, useState } from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./TargetRow.module.css";
import { Target } from "../../types";
import ExternalLink from "../ExternalLink/ExternalLink";

const TARGET_PROFILE_URL = "https://platform.opentargets.org/target";

type ShortTarget = Pick<Target, "id" | "approvedName" | "approvedSymbol">;

type TargetRowProps = {
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
        <td>
          <label htmlFor={`handle${index}`}>{handlerLabel}</label>
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

TargetRow.propTypes = {};

export default TargetRow;
