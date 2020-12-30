import React, { useState } from "react";
import "./index.module.css";
import PtView from "../../components/ptView";
import SkView from "../../components/skView";

const Thumbometer = () => {
  const [speakerView, setSpeakerView] = useState(true);
  return (
    <main>
      <h1>Thumbometer</h1>
      {speakerView && <SkView />}
      {!speakerView && <PtView />}
    </main>
  );
};

export default Thumbometer;
