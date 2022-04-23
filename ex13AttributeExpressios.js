// Dynamic class

// Complete the getPaymentButton function such that it returns a button with the text Pay. When the user is logged out, it should have the class disabled, and otherwise the class clickable.
import React from "react";

function getPaymentButton(user) {
    if (user.loggedIn) {
        return <button className="clickable">Pay</button>
    } else {
        return <button className="disabled">Pay</button>
    }
}


/*
JSX also supports attribute expressions which means the value of the attribute will be based on an expression (or most often a variable), for example:

const limit = 5;

const element = <input type="number" max={limit} />;
When converted to React.createElement(), it will look like this:

const limit = 5;
const element = React.createElement("input", {
  type: "number",
  max: limit
});
This example shows how properties can have string values as well as dynamic values, for example, the max property takes the value of the variable limit.

Quotes OR Expression

It's important to note that you should either put quotes for the attribute value OR have an expression with curly braces, but not both.

So this is invalid: <input max="{limit}" />, it will NOT work.

Instead, it should have been: <input max={limit} />

The rule of thumb is:

If the value is a string, then wrap it with quotes
If the value is dynamic (result of an expression), then wrap it with curly braces {}
We will see more complicated examples in the next lesson, where you'd like to have a mix of both, string and dynamic value.

Numbers and booleans

Number and boolean attribute values should be passed as an expression:

<input max={2} disabled={true} className="textbox" />
Recap

If the value of the attribute is a string, then wrap it with quotes
If the value of the attribute is an expression, then wrap it with curly braces {}
Number and boolean attribute values should be passed as an expression
*/