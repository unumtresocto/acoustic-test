import React from "react";
import "./Text.css";

export default function Text({ config }) {
  return <span className="text">{config.value}</span>;
}
