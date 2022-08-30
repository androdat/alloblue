import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { AlloblueIFrame } from "alloblue";
import { Dialer } from "dialer";
function App() {
  const [alloblue, setAlloblue] = useState(false);
  const [dialer, setDialer] = useState(false);

  return (
    <div className="App">
      <div className="button-parent">
        <Button onClick={() => { setAlloblue(true); setDialer(false); }} variant="contained" > alloblue iframe </Button>
        <Button onClick={() => { setAlloblue(false); setDialer(true); }} variant="contained" > dialer react component </Button>
      </div>
      {alloblue && <AlloblueIFrame />}
      {dialer && <Dialer color={"green"} />}
    </div>
  );
}

export default App;
