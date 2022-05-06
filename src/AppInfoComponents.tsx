import React from "react";
import logo from "./logo.svg";
import './App.css'

export const AppHeader = () => {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}

export const AppIntroParagraph = () => {
  return(
      <h2 className="App-intro-p">
          <p>How would your resume hold up against a scanner? 
              Find out by submitting your resume below! 
              (Your information will not be recorded or saved.)
          </p>
      </h2>
  );
}