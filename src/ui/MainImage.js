import React from "react";
import { ElementTypes } from "../domain/elements";
import ElementRenderer from "./element-types/ElementRenderer";

export default function MainImage({ config }) {
  return <ElementRenderer type={ElementTypes.GROUP} config={config} />;
}
