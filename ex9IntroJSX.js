// Using JSX, render a paragraph element with the text My first JSX. html : <div id="react-root"></div>

import React from "react";
import {render} from "react-dom";

const root = document.querySelector("#react-root");

render(<p>My first JSX</p>, root);



/*
When working with React, you will need to use React.createElement  to represent your UI. However, as you may have seen, the syntax is long and will become even longer and more tedious when you start having more complicated UI.

To solve that issue, React uses a special syntax called JSX.
This JSX syntax may look similar to HTML, but it is NOT HTML.

Let's see an example:


import React from "react";
const title = <h1>Hello World</h1>

Even though this looks like it's HTML, it really is not HTML. You will see why in the next lesson.

The code above gets translated to the following:

import React from "react";
const title = React.createElement("h1", {}, "Hello World");

Which one is easier to read?
The first one because you're expressing that you need to create an element that is an h1 that contains Hello World.

Always remember that the JSX that you write is being converted to React.createElement.
So, JSX is created to make it easier for you to describe your UI.

Now that you know that when you write JSX your code will be converted to React.createElement(...), it's important to understand that you have to have React in scope.
This means you need to import React in every file that uses JSX or else it won't work.
You need to import React from "react" for your JSX to work because eventually it's being transformed into React.createElement(...) function calls.

If you did not import React, then you will get an error that React is undefined and that you can't call createElement(...) on an undefined variable.

!!!!!As of React 17, you can skip importing React for JSX to work. However, this course is using React 16 as React 17 does not have major new features. Once we upgrade the course to React 18, you will be able to skip importing from React. More info regarding this is provided in the chapter recap.!!!!

//////// JSX ////////
JSX with ReactDOM

Here's an example of how JSX is used with ReactDOM :

<div id="root"></div>
import React from "react";
import {render} from "react-dom";

const root = document.querySelector("#root");
render(<h1>Hello World</h1>, root);

This will render the <h1>Hello World</h1> inside the #root element.

*/