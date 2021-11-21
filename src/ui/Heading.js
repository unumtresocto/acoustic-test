import React from "react";
import { ElementTypes } from "../domain/elements";
import ElementRenderer from "./element-types/ElementRenderer";

export default function Heading({ config }) {
  return (
    <h1>
      <ElementRenderer type={ElementTypes.TEXT} config={config} />
    </h1>
  );
}
