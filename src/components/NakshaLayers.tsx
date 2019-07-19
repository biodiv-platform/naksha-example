import { Layers } from "naksha-components-react";
import React from "react";

export default function NakshaLayers() {
  const endpoint = `${window.location.origin}/naksha`;

  return (
    <div
      style={{
        marginTop: "15px",
        height: "calc(100vh - 85px)",
        width: "100%"
      }}
    >
      <Layers
        mapboxToken={process.env.REACT_APP_MAPBOX_TOKEN}
        endpoint={endpoint}
        layersPanelClosed={false}
      />
    </div>
  );
}
