import { FC, useState, useEffect } from "react";
import styles from "./Table.module.css";

import TabelRow from "../TabelRow";

interface TableSectionPropType {
  tableData: any;
  currentState: string;
}

const Table: FC<TableSectionPropType> = ({ tableData, currentState }) => {
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
          <TabelRow content={""} />
        </tbody>
      </table>
    </>
  );
};

export default Table;
