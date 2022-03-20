import React from "react";
import ReactDOM from "react-dom";

import * as PI from "./math.js";
//default parameter can have another name - other parameters NO (keep same name)
//Below the approach considered better because explicits what is being imported
//import PI, {doublePi, triplePi} from "./math.js";

ReactDOM.render(
  <ul>
    <li>{PI.default}</li>
    <li>{PI.doublePi()}</li>
    <li>{PI.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
