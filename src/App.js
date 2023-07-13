import './App.css';
import Productlist from './components/productlist'
import Card from "react-bootstrap/Card";
import React from "react";


function App() {
  return (
    <>
    <div className="App">
      <Productlist />
    </div>
    <div>
    <Card style={{ width: "22rem" }}>
    <Card.Body>
      <Card.Title style={{ color: "green" }}>Hello Ahmed!</Card.Title>
    </Card.Body>
  </Card>
  </div>
  </>
  );
}




export default App;
