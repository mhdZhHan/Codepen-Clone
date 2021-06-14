import { Fragment } from "react";
import Home from "./components/screens/Home";
import Global from "./Global";

function App() {
  return (
    <Fragment>
      <Global />
        <Home />
    </Fragment>
  );
}

export default App;
