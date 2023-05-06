import { FC } from "react";
import styles from "./Tag.module.css";

export type Holidays =
  | "National holiday"
  | "Observance"
  | "Common local holiday"
  | "Season";

interface TagProp {
  type: Holidays;
}

const holidayColorMapper: { [key in Holidays]: string } = {
  "National holiday": styles.tag_national_holiday,
  Observance: styles.tag_observance,
  "Common local holiday": styles.tag_common_holiday,
  Season: styles.tag_season,
};

const Tag: FC<TagProp> = ({ type }) => {
  const tagBgColor = holidayColorMapper[type];
  return <div className={`${styles.tag_container} ${tagBgColor}`}>{type}</div>;
};

export default Tag;
