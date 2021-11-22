import React from "react";
import "./Heading.css";

import { ElementTypes } from "../../domain/elements";
import ElementRenderer from "../element-types/ElementRenderer";

export default function Heading({ config }) {
  return (
    <h1 className="heading">
      <ElementRenderer type={ElementTypes.TEXT} config={config} />
    </h1>
  );
}
