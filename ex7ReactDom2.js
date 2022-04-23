// Render an <h1 class="title">Online Supermarket</h1> on the page inside the given root.

import React from "react";
import {render} from "react-dom";

const element = React.createElement("h1", {
    className: "title"
}, "Online Supermarket");
const root = document.querySelector("#react-root");

render(element, root);