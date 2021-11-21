import React from "react";

export default function Image({ config }) {
  const url = `https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/${config.renditions.lead.source}`;

  return <img src={url} alt={""} />;
}
