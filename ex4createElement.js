// Document.createElement
// Complete the function createCard such that it returns a <div class="card"></div> element (not an HTML string)

function createCard() {
    const card = document.createElement("div");
    card.className = "card";
    return card;
}

// sample usage (do not modify)
console.log(createCard());


/*
document.createElement(tagName) is a Web API provided by browsers that let you programmatically create an HTML element.

Here's a quick refresher on how it works:
    
const element = document.createElement("h2");
// this creates: <h2></h2>
// which you can then insert in the DOM:
document.body.appendChild(element);


You won't need most of the properties you see above, however, the most important ones that show up in the full list are:
id
style
className
How would you change the class of the element? What about the style?

const element = document.createElement("h2");
element.className = "name-of-class";
element.style = "color: red; background-color: blue";


You might be wondering, why are we writing all of this in JavaScript?
You have to know that this is equivalent of directly creating the following element in HTML:
<h2 class="name-of-class" style="color: red; background-color: blue"></h2>
The reason why we're creating it in JavaScript will be explained in the next few lessons.

Multiple classes
Multiple classes can be set by separating the class names with a space character.

const element = document.createElement("h2");
element.className = "container center";
// <h2 class="container center"></h2>


Recap

const element = document.createElement(tagName) creates an HTML element
element.style = "background-color: blue" sets the background-color to blue
element.className = "container" sets the class of the element to: container
multiple classes can be set by separating them with a space character: element.className = "container center"

*/