// Supermarket tagline
// Using JSX, complete the getTagline method such that it returns an h2 element with the class: "subtitle" and the text: "Grocery shopping simplified".
import React from 'react';

function getTagline() {
  return <h2 className="subtitle">Grocery shopping simplified</h2>;
}

// sample usage (do not modify)
console.log(getTagline());


/*Login status
Complete the getLoginStatus method by returning a paragraph with the text: You are logged in when the user's logged in and a link to the login page otherwise with the text Login. The login page is located at /login.

In summary:
when the user is logged in, you should only return a paragraph
otherwise you should only return an anchor (a tag) */

import React from "react";


function getLoginStatus(is_loggedin) {
    if (is_loggedin) {
        return <p>You are logged in</p>;
    } else {
        return <a href="/login">Login</a>;
    }

}

// sample usage (do not modify)
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));


/*
Working with JSX 
 
Last updated February 2022
Since JSX is being converted into a React.createElement(...) that returns an object, you can essentially think of a JSX element as if it was an object.
So you can think of <h1 className="title">Supermarket</h1> as being an object that more or less looks like this (simplified):

{
  type: 'h1',
  props: {
    className: "title",
    children: "Supermarket"
  }
}

As a reminder, this object is a representation of a piece of your UI that React maintains in its Virtual DOM.
This lets it efficiently know when it got updated and then it re-renders it using ReactDOM.

Since <h1 className="title">Supermarket</h1> is an object, then you can treat it as an object.
This is why you can:

1-Assign it to a variable:

const title = <h1 className="title">Supermarket</h1>;


2-Return it from a function

function getTitle() {
    return <h1 className="title">Supermarket</h1>
}


3-Conditionally return different elements:
function getTitle(is_open) {
    if (is_open) {
        return <h1 className="title">Supermarket</h1>
    } else {
        return <h1 className="title">Supermarket (closed)</h1> 
    }
}


4- Other things you can normally do. It's a call to React.createElement(...).
This may be obvious to some people, but we thought we'd spend some time on it to make sure you understand it because it takes some time to get used to the JSX syntax.

To help you further visualise this, the last example you saw above (getTitle), gets transformed to the following code:

function getTitle(is_open) {
  if (is_open) {
    return React.createElement("h1", {
      className: "title"
    }, "Supermarket");
  } else {
    return React.createElement("h1", {
      className: "title"
    }, "Supermarket (closed)");
  }
};

You may realize that there's a lot of repetition between the code inside the if block and the code inside the else block.
Don't worry, we will get to that in the next chapter!

Recap

A JSX element is an object
you can treat a JSX element like an object
you can assign a JSX element to a variable
you can return a JSX element from a function

*/