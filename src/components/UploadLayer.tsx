import React from "react";
import { Upload } from "naksha-components-react";

export default function UploadLayer() {
  return (
    <Upload
      endpoint={`/naksha/layer/uploadshp`}
    />
  );
}
