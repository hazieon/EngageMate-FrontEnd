import React, { useState } from "react";
import NavBar from "../../components/navBar";

import "./index.module.css";
import PtView from "../../components/ptView";
import SkView from "../../components/skView";

const Thumbometer = () => {
  const [speakerView, setSpeakerView] = useState(true);
  return (
    <main>
      <NavBar />
      {speakerView && <SkView />}
      {!speakerView && <PtView />}
    </main>
  );
};

export default Thumbometer;
