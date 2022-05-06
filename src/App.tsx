import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AppHeader, AppIntroParagraph } from "./AppInfoComponents";
import { FileSubmitButton } from "./SubmitButton";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppIntroParagraph/>
      <FileSubmitButton/>
    </div>
  );
}

export default App;
