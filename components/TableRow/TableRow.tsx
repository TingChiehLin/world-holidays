import { FC } from "react";
import styles from "./TableRow.module.css";
import Tag from "../Tag/Tag";
import { Holidays } from "../Tag";

export interface TableRowProp {
  name: string;
  date: string;
  description: string;
  types: Holidays[];
}

const TableRow: FC<TableRowProp> = ({ name, date, description, types }) => {
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
        {types.map((type: Holidays) => (
          <Tag key={type} type={type} />
        ))}
      </td>
    </tr>
  );
};

export default TableRow;
