import React from "react";
import { Button } from "react-bootstrap";
import './App.css'

export const FileSubmitButton = () => {
    return(
        <Button variant="info" size="lg" className="App-button">
            Submit
        </Button>
    );
}