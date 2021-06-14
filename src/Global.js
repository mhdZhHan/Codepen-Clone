import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  .CodeMirror {
      height: 100% !important; // overrite default style

  }
`;
export default Global