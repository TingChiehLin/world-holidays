import { FC } from "react";
import styles from "./TabelRow.module.css";
import Tag from "../Tag/Tag";
import { Holidays } from "../Tag";

export interface TabelRowProp {
  name: string;
  date: string;
  description: string;
  type: Holidays;
}

const TabelRow: FC<TabelRowProp> = ({ name, date, description, type }) => {
  return (
    <tr id="table-row" className={styles.table_row}>
      <th id="table-name" scope="row">
        {name}
      </th>
      <td id="table-date" className={styles.tableNumber}>
        {date}
      </td>
      <td className={styles.tableDescription}>{description}</td>
      <td className={styles.tableType}>
        <Tag type={type} />
      </td>
    </tr>
  );
};

export default TabelRow;
