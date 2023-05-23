import { FC, useState, useEffect, useId } from "react";
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
  const id = useId();
  const filteringData = tableData;
  console.log("filteringData", filteringData);
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
          {(filteringData || []).map((d: any) => (
            <TableCell
              key={id}
              name={d.name}
              description={d.description}
              data={{
                iso: "",
                datetime: {
                  year: 0,
                  month: 0,
                  day: 0,
                },
              }}
              typeName={d.type[0]}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableSection;
