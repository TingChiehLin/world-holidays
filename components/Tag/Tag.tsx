import { FC } from "react";
import styles from "./Tag.module.css";

interface TagTypeProp {
  typeName: string;
}

const Tag: FC<TagTypeProp> = ({ typeName }) => {
  let tagBgColor = "";

  switch (typeName) {
    case "National holiday":
      tagBgColor = styles.tag_national_holiday;
      break;
    case "Observance":
      tagBgColor = styles.tag_observance;
      break;
    case "Common local holiday":
      tagBgColor = styles.tag_common_holiday;
      break;
    case "Season":
      tagBgColor = styles.tag_season;
      break;
  }

  return (
    <div className={`${styles.tag_container} ${tagBgColor}`}>{typeName}</div>
  );
};

export default Tag;
