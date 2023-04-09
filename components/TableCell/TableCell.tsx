import { FC } from "react";
import styles from "./TableCell.module.css";
import Tag from "../Tag/Tag";

interface TableCellTypeProp {
  typeName: string;
}

const TableCell: FC<TableCellTypeProp> = ({ typeName }) => {
  return (
    <tr id="table-row" className="table_row">
      <th id="table-name" scope="row">
        New Year&aposs Day
      </th>
      <td id="table-date" className={styles.tableNumber}>
        Jan 1
      </td>
      <td id="table-description">Shrove xxxxx</td>
      <td id="table-type">
        <Tag typeName={"National holiday"} />
      </td>
    </tr>
  );
};

export default TableCell;
