import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";

function App() {

  return (
    <div className="App">
      <Container>
        <Route path="/" exact component={Home}/>
        <Route path="/score/:day" exact component={Score}/>
      </Container>
    </div>
  );
};

const Container = styled.div `
  max-width: 350px;
  min-height: 70vh;
  background-color: white;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`
export default App;