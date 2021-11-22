import React from "react";
import { ElementTypes } from "../../domain/elements";
import ElementRenderer from "../element-types/ElementRenderer";

export default function Author({config}) {
  return <ElementRenderer type={ElementTypes.TEXT} config={config} />;
}
