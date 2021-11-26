import React from "react";
import SeatingChart from "./Components/SeatingChart/SeatingChart.js";

function App() {
  return (
      <SeatingChart guestList={[
        {key: "Tyrion Lannister"},
        {key: "Daenerys Targaryen", plus: 3},  // dragons, of course
        {key: "Jon Snow"}
      ]}/>
  );
}

export default App;
