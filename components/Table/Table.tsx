import { FC, useState, useEffect, useId } from "react";
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
  const tableDataID = useId();
  return (
    <>
      <table className={styles.table_container}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody className={styles.table_data}>
          {(tableData || []).map((t: TableRowType) => {
            return (
              <TableRow
                key={t.urlid}
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
