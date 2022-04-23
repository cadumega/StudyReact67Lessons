// Render the element on the page inside the given root in the index.html page.
// When an index.html file is available, you can see the output of your code by clicking on the Browser tab. You can try it already in this challenge!

// Also make sure to check the code inside the index.html file so that you can get the id of the root element. <div id="react-root"></div>


import React from "react";
import {render} from "react-dom";

const element = React.createElement("p", {}, "Hello World");
const root = document.querySelector("#react-root");

render(element, root);




/*
ReactDOM is the glue between React and the DOM.
React creates a virtual representation of your User Interface (in what we call a Virtual DOM) and then ReactDOM is the library that efficiently updates the DOM based on that Virtual DOM.

The reason why the Virtual DOM exists is to figure out which parts of the UI need to be updated and then batch these changes together. ReactDOM receives those instructions from React and then efficiently updates the DOM.


Recap

ReactDOM is the glue between React and the DOM.
ReactDOM is separate from React because you can write React for native applications.
Reconciliation is the process of syncing the Virtual DOM to the actual DOM.

Let's start by installing ReactDOM:

npm install react-dom
This is something you have to do on top of the previous installation.
So if you were getting started from scratch, you'd have to install both packages (react & react-dom) like this:

npm install react react-dom

Importing ReactDOM

Here's how you can import ReactDOM after installing it:
import ReactDOM from "react-dom";

As you can see, this is a default import just like we had with the react package.

This ReactDOM object contains a method that you will use very often, which is called render. By importing ReactDOM with this default import, you will have access to the render method inside the ReactDOM object. You can access it like this:


import ReactDOM from "react-dom";

// You can call ReactDOM.render()
You can also import the render method directly by using the named import syntax:


import {render} from "react-dom";

// You can call render()
You can use whichever syntax you prefer. Technically speaking the named import is better than the default one because you're specifically importing the render method that you need rather than importing the whole object. But whether that will have an effect on your total JavaScript size depends on how your module bundler (example: Webpack) is configured.

Root of your app

We use ReactDOM to render (visualize) our React Elements  on the page.
To do that, you have to tell ReactDOM where to render these elements.
We call that element the root.
This is a <div> element with an id of root or app-root or react-root or whatever name you prefer.
Let's go with root for this example:

<div id="root"></div>


Render your first Element

With the above root element, we can now render our first React Element:


import {render} from "react-dom";

const root = document.querySelector("#root");
render(React.createElement("p", {}, "Hello World"), root);
If you imported ReactDOM rather than render, then you can call ReactDOM.render() and the rest would be the same.

This will show you a <p>Hello World</p> on your screen because the render method from ReactDOM receives a React Element (a virtual representation) and then makes it visible in the actual DOM.

The render(element, root) method expects the element to render as a first argument and the root as the second one.

Recap

Install ReactDOM with npm install react-dom
Import ReactDOM's render method with import {render} from "react-dom"
ReactDOM weighs 119KB when imported.
The root element is where ReactDOM will render your UI
The signature of render is: render(element, root)
*/