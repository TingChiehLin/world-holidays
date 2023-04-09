import { FC, useState, useEffect } from "react";
import styles from "./TableSection.module.css";

import TableCell from "../TableCell/TableCell";

interface TableSectionPropType {
  tableData: any;
  currentState: string;
}

const TableSection: FC<TableSectionPropType> = ({
  tableData,
  currentState,
}) => {
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
          <TableCell typeName={""} />
        </tbody>
      </table>
    </>
  );
};

export default TableSection;
