import { FC } from "react";
import styles from "./Table.module.css";

import TableRow from "../TableRow";
import { Holidays } from "../Tag";

type TableRowType = {
  urlid: string;
  name: string;
  date: {
    iso: string;
  };
  description: string;
  type: Holidays[];
};

interface TableSectionPropType {
  tableData: TableRowType[];
}

const Table: FC<TableSectionPropType> = ({ tableData }) => {
  console.log("tableData:", tableData);
  return (
    <>
      <table
        className={`${styles.table_container} ${
          tableData != undefined &&
          styles.close_table_container_radius_bl +
            " " +
            styles.close_table_container_radius_br
        }`}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody id="holidays_contain" className={styles.table_data}>
          {(tableData || []).map((t: TableRowType, index) => {
            return (
              <TableRow
                key={`${t.urlid}-${index}`}
                name={t.name}
                date={t.date.iso}
                description={t.description}
                types={t.type}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
