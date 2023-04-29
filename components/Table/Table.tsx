import { FC, useState, useEffect, useId } from "react";
import styles from "./Table.module.css";

import TabelRow from "../TabelRow";
import { TabelRowProp } from "../TabelRow";
import { Holidays } from "../Tag";

type TableRowType = {
  name: string;
  date: {
    iso: string;
  };
  description: string;
  type: any;
};

//issue 1.: holiday
//filtering data

//issues 2
//Encountered two children with the same key, `:Rpl5:`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
 
//issue 3
//CROS when I fetch data

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
              <TabelRow
                key={tableDataID}
                name={t.name}
                date={t.date.iso}
                description={t.description}
                type={t.type[0]}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
