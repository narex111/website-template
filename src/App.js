import React from 'react';

import NavRow from "./components/Molecules/NavRow"


function App() {
  console.log(window.innerWidth, "inner width")
  return (
    <div className="App">
      <NavRow></NavRow>
    </div>
  );
}

export default App;
