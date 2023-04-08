import { FC } from "react";
import styles from "./TableCell.module.css";

interface TableCellTypeProp {}

const TableCell: FC<TableCellTypeProp> = () => {
  return (
    <tr>
      <th id="table-name" scope="row">
        New Year&aposs Day
      </th>
      <td id="table-date" className={styles.tableNumber}>
        Jan 1
      </td>
      <td id="table-description">Shrove xxxxx</td>
      <td id="table-type">National holiday</td>
    </tr>
  );
};

export default TableCell;
