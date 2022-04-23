/*
Root Element 
 
Last updated June 2021
We'd like to further develop the concept of the root element which could also be called the container.

This root element that you pass to ReactDOM will become completely managed by React. So you should not write any kind of JavaScript that changes its content.

So once you have:

<div id="react-root"></div>

import React from "react";
import {render} from "react-dom";

const root = document.querySelector("#react-root");
render(React.createElement("h1", {}, "Hello World"), root);

Recap

The root element is completely managed by ReactDOM
You should not directly change/update the content of the root element
Apps built with React have a single root element (Most common use case)
Existing Apps that integrate React to make a feature interactive, could have more than 1 root.


You may have noticed that we've been asking you to import React every time you use React.createElement, that's because we'd like to make sure you understand this concept and get used to it.
Eventually, this becomes boring so we'll make it easier for you later in this course.

React.createElement is quite a long syntax. However, it's the foundation for JSX. What is JSX and how does it work? Let's find out in the next chapter.

Chapter Recap

ReactDOM is the glue between React and the DOM.
ReactDOM is separate from React
ReactDOM can be installed with npm install react-dom
Reconciliation is the process of syncing the Virtual DOM to the actual DOM.
The root element is completely managed by ReactDOM
You should not directly change/update the content of the root element
Apps built with React have a single root element (Most common use case)

*/