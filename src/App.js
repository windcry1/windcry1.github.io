import './App.css';
import MarkdownObj from "./MarkdownObj";
import React from "react";

function App() {
  return (
    <div className="App">
      <MarkdownObj url={'statics/About.md'}/>
    </div>
  );
}

export default App;
