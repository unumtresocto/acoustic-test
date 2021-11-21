import React from "react";
import { ElementTypes } from "../domain/elements";
import ElementRenderer from "./element-types/ElementRenderer";

export default function Date({ config }) {
  return <ElementRenderer type={ElementTypes.DATE_TIME} config={config} />;
}
