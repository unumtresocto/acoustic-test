import React from "react";
import { DateTime as dt } from "luxon";

export default function DateTime({ config }) {
  return <div>{dt.fromISO(config.value).toLocaleString(dt.DATETIME_MED)}</div>;
}
