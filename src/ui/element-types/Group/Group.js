import React from "react";
import "./Group.css";

import ElementRenderer from "../ElementRenderer";

export default function Group({ config }) {
  const elements = Object.entries(config.value).map(([key, groupItem]) => {
    return (
      <div className="group__element" key={key}>
        <ElementRenderer type={groupItem.elementType} config={groupItem} />
      </div>
    );
  });

  return <div className="group">{elements}</div>;
}
