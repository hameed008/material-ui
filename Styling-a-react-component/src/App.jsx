import "./App.css";

//* Styled-Component Library:
// import styled from "styled-components";
import InlineComponent from "./Ways-To-Use-CSS-In-React/InlineStyle";
import EmotionButton from "./Ways-To-Use-CSS-In-React/UsingStyledComponentLibrary/EmotionLibrary";



import MyComponent from "./Ways-To-Use-CSS-In-React/UsingStyledComponentLibrary/StyledComponent";

import ExternalStyle from "./Ways-To-Use-CSS-In-React/ExternalStyle";

import ModuleCSS from "./Ways-To-Use-CSS-In-React/ModuleCSS";



// const StyledButton = styled.button`
//   background-color: red;
// `;
//* Component:
// import Header from "./components/Header";

function App() {
  return (
    <>
      <InlineComponent></InlineComponent>
      <ExternalStyle></ExternalStyle>
      <ModuleCSS></ModuleCSS>
      <MyComponent></MyComponent>
      <EmotionButton></EmotionButton>

    </>
  );
}

export default App;
