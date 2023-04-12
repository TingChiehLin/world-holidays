import { FC } from "react";
import styles from "./TableCell.module.css";
import Tag from "../Tag/Tag";

type DataField = {
  iso: string;
  datetime: {
    year: number;
    month: number;
    day: number;
  };
};

interface TableCellTypeProp {
  name: string;
  description: string;
  data: DataField;
  typeName: string;
}

const TableCell: FC<TableCellTypeProp> = ({
  name,
  description,
  data,
  typeName,
}) => {
  const { year, month, day } = data.datetime;
  const date = month + " " + day;
  return (
    <tr id="table-row" className="table_row">
      <th id="table-name" scope="row">
        {name}
      </th>
      <td id="table-date" className={styles.tableNumber}>
        {date}
      </td>
      <td id="table-description">{description}</td>
      <td id="table-type">
        <Tag typeName={typeName} />
      </td>
    </tr>
  );
};

export default TableCell;
