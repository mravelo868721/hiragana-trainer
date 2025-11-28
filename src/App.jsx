import { useState, useEffect } from "react";
import LeftPanel from "/src/components/LeftPanel";
import MiddlePanel from "/src/components/MiddlePanel";
import RightPanel from "/src/components/RightPanel";

import "./App.css";
import RomajiButtons from "./components/RomajiButtons";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("seion");
  const [selectedPrefix, setSelectedPrefix] = useState("a");
  const [selectedRomaji, setSelectedRomaji] = useState(null);
  const [kanaData, setKanaData] = useState({});

  // What this does: useEffect() runs code after React finishes rendering the component. fetch() requests a file and returns a promise. .then takes the (response) and converts that to .json data. .then takes that .json data and converts it to a React state using setKanaData. The [] at the end says "run this Effect only ONCE".
  useEffect(() => {
    fetch("hiragana.json")
      .then((res) => res.json())
      .then((data) => setKanaData(data));
  }, []);

  return (
    <div
      className="
    app
    flex
    justify-between
    "
    >
      <LeftPanel
        kanaData={kanaData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPrefix={selectedPrefix}
        setSelectedPrefix={setSelectedPrefix}
        setSelectedRomaji={setSelectedRomaji}
      />
      <MiddlePanel
        kanaData={kanaData}
        selectedCategory={selectedCategory}
        selectedPrefix={selectedPrefix}
        selectedRomaji={selectedRomaji}
        setSelectedRomaji={setSelectedRomaji}
      />
      <RightPanel
        kanaData={kanaData}
        selectedCategory={selectedCategory}
        selectedPrefix={selectedPrefix}
        setSelectedPrefix={setSelectedPrefix}
      />
    </div>
  );
}

export default App;

//testing gitchy gitchy yaya tata
