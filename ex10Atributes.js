// Using JSX, render a paragraph that has the class "selected" and an id of "promo" with the text Hello World
import React from 'react';
import { render } from 'react-dom';

const root = document.querySelector("#react-root");

render(<p id="promo" className= "selected">Hello World</p>, root);


// 
/*
Let's see how we can set attributes  to elements in JSX.

const title = <h1 id="brand-title">Supermarket</h1>;
This is equivalent to the below once converted to JavaScript:


const title = React.createElement("h1", {id: "brand-title"}, "Supermarket");


What about setting the class?

Remember how we set the class with React.createElement?
Keep it in mind because it's the same in JSX:

const title = <h1 id="brand-title" 
className="primary-color">Supermarket</h1>;

Remember how to set the class, we have to use the className because it is being set on the element created by React.
This is why JSX is NOT HTML.
With HTML, we would have written: <h1 id="brand-title" class="primary-color">Supermarket</h1> but this is not valid JSX.
So don't forget that JSX is converting your code into React.createElement(...).

RECAP
Attributes in JSX get passed as the 2nd argument of React.createElement(...)
<div className="active"></div> is how you would give the class active to this element.
You need quotes around attribute values that are strings.

Don't forget to change the class to className.
Don't forget to change the class to className.
Don't forget to change the class to className.
Don't forget to change the class to className.!!!!!!!!
*/