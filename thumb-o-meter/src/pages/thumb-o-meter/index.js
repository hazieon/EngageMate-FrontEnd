import React from "react";
import "./index.module.css";
import PtView from "../../components/ptView";
import SkView from "../../components/skView";

const Thumbometer = () => {
  return (
    <main>
      <h1>Thumbometer</h1>
      <PtView />
      <SkView />
    </main>
  );
};

export default Thumbometer;
