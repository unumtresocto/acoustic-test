import React, { Fragment } from "react";
import ElementRenderer from "./ElementRenderer";

export default function Group({ config }) {
  const elements = Object.entries(config.value).map(([key, groupItem]) => {
    return (
      <ElementRenderer
        key={key}
        type={groupItem.elementType}
        config={groupItem}
      />
    );
  });

  return <Fragment>{elements}</Fragment>;
}
