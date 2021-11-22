import React from "react";
import sanitizeHtml from "sanitize-html";

const sanitize = dirty => ({
  __html: sanitizeHtml(dirty, { allowedAttributes: { "*": ["style"] } }),
});

export default function FormattedText({ config }) {
  return config.values.map((value, index) => {
    const sanitized = sanitize(value);

    return <div key={index} dangerouslySetInnerHTML={sanitized}></div>;
  });
}
