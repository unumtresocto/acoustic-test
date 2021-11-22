import React from "react";
import { ElementTypes } from "../../domain/elements";
import ElementRenderer from "../element-types/ElementRenderer";

export default function Body({ config }) {
  return <ElementRenderer type={ElementTypes.FORMATTED_TEXT} config={config} />;
}
