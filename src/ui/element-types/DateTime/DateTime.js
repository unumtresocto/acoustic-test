import React from "react";
import { DateTime as dt } from "luxon";

export default function DateTime({ config }) {
  return (
    <span>{dt.fromISO(config.value).toLocaleString(dt.DATETIME_MED)}</span>
  );
}
