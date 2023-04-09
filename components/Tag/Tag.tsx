import { FC } from "react";
import styles from "./Tag.module.css";

interface TagTypeProp {
  typeName: string;
}

const Tag: FC<TagTypeProp> = ({ typeName }) => {
  return <div className={styles.tag_container}>{typeName}</div>;
};

export default Tag;
