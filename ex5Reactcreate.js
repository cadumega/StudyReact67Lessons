// Complete the createDivElement function such that it creates a React Element that represents a div with the text Hello World
import React from "react";

function createDivElement() {
    return React.createElement("div", {}, "Hello World!")
}

console.log(createDivElement());



// React Elements II - Complete the createTitle function such that it creates a React Element that represents an h1 with the text Welcome to our supermarket and the class hero-title.
import React from "react";

function createTitle() {
    return React.createElement("h1", { className: "hero-title" }, "Welcome to our supermarket");
}

console.log(createTitle());

/*
Comparison

Let's compare document.createElement and React.createElement.

Return value

document.createElement returns a DOM element (for example a div or an h1). Whereas React.createElement returns an object that represents the DOM element.
The object looks something like this:


const element = React.createElement("h1");
//returns an object similar to this one:
{
  type: 'h1',
  props: {}
}


Changing the class/style

This is where these 2 methods are similar in terms of syntax:

React.createElement("h1", {className: "center", style: "color: red"})

Notice that we wrote className instead of class because we're talking about the same properties as the one in the previous lesson.


Writing text

To write a text inside the element, you have to provide the 3rd parameter for React.createElement which is called children (so it also accepts other Elements for later on).

React.createElement("h1", {}, "Hello World")

This returns an Object representing an h1 that contains Hello World.

Notice how we're saying that we don't want to set a className or style (or other options) so we pass {} as the second parameter (you could also pass null).

If you think that the syntax is a bit ugly and overcomplicated, you're totally right to think so. We will be using JSX which replaces the code above with a <h1>Hello World</h1>. However, JSX is NOT exactly the same as HTML hence why you should learn React.createElement first.

Recap

A React Element is the smallest building block.
It's a representation of a small piece of your UI.
React.createElement returns a React Element
React.createElement(type, options, children)
*/