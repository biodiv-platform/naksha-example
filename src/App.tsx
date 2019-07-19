import "naksha-components-react/dist/naksha-components-react.css";

import React from "react";
import Tabs from "@atlaskit/tabs";

import NakshaLayers from "./components/NakshaLayers";
import UploadLayer from "./components/UploadLayer";

const App: React.FC = () => {
  const tabs = [
    { label: "Layers List", content: <NakshaLayers /> },
    { label: "Upload Layer", content: <UploadLayer /> }
  ];

  return <Tabs tabs={tabs} />;
};

export default App;
