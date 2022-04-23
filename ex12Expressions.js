//ex1
// Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out
// Where USER is the name of the user received as an argument.'

import React from "react";


function getNavbar(user) {
    return <div>Logged in as {user.name}. Log out</div>    //Does not hardcode answer

    // return (
    //     <div>
    //         <p>Logged in as {user.name}</p>
    //         <a href="/logout">Log out</a>
    //     </div>
    // );
}
// sample usage (do not modify)
const element = getNavbar({
    name: "Sam",
    age: 34
});
console.log(element);


//ex2
// Complete the getNotifications function such that it returns a p with the message: You have X new notifications
// Where X is the number of notifications.
import React from "react";
function getNotifications(notifications) {
    return <p>You have {notifications.length} new notifications</p>
}


// sample usage (do not modify)
const notifications = [{
    id: 1,
    text: "Your order has been delivered"
}, {
    id: 2,
    text: "Your coupon code has expired"
}];
const element = getNotifications(notifications);
console.log(element);

//ex3
// Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out
// Where USER is the first name and last name of the user received as an argument.

import React from "react";

function getNavbar(user) {
    return <div>Logged in as {user.firstName} {user.lastName}. Log out</div>
}

// sample usage (do not modify)
const element = getNavbar({
    firstName: "Sam",
    lastName: "Dung",
    age: 27
});
console.log(element);



// DUVIDA PQ  (user) em vez de parametro (element) em getNavbar(user) .
// function getNavbar(element) {
//     return <div>Logged in as {element.firstName} {element.lastName}. Log out</div>
//   }

/*
Expressions in JSX

You can use these expressions in JSX by wrapping them with curly brackets {}.

Basic example


const title = <h1>You have {2 + 3} notifications</h1>;
This will create an h1 element with the text: You have 5 notifications.

See how the expression (2 + 3) gets executed and resolves to 5 which then gets replaced so that the final text is You have 5 notifications.
For it to work, expressions must be inside those curly braces.


- Variables

It's often useful to have variables in those expressions, for example, to show the user's name in the navbar:

const user = {
    id: 1,
    name: "Sam"
};

const element = <p className="user-info">Welcome {user.name}!</p>
This will create a p element with the text: Welcome Sam!.


- Function calls

You can also call functions inside those expressions, for example:

function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const name = "brendan";

const element = <p className="user-info">Welcome {capitalise(name)}</p>
which will create a paragraph with the text: Welcome Brendan (notice how the B is uppercased).

Uma function com variavel nessa chamada de expressão



Recap

An expression is any valid JavaScript code that resolves to a value
Expressions in JSX need to be wrapped inside curly braces: {expression}
<h1 className="title">You have {2 + 3} notifications</h1> is an example of JSX with an expression.
*/