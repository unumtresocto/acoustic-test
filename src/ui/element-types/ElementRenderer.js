import React from "react";
import { ElementTypes } from "../../domain/elements";
import DateTime from "./DateTime/DateTime";
import FormattedText from "./FormattedText/FormattedText";
import Group from "./Group/Group";
import Image from "./Image/Image";
import Text from "./Text/Text";

const RENDERERS = {
  [ElementTypes.TEXT]: Text,
  [ElementTypes.FORMATTED_TEXT]: FormattedText,
  [ElementTypes.DATE_TIME]: DateTime,
  [ElementTypes.IMAGE]: Image,
  [ElementTypes.GROUP]: Group,
};

function renderer(elementType, props) {
  if (typeof RENDERERS[elementType] !== "undefined") {
    return React.createElement(RENDERERS[elementType], props);
  } else {
    return "";
  }
}

export default function ElementRenderer({ type, config }) {
  return renderer(type, { config });
}
