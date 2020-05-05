# Class Notes
## Accessing DOM Elements
- .getElementById()
    - Selects an element by its given id. It can be saved to a variable to use in multiple places of the JS file.
- .getElementByTagNames()
    - Selects every element of the type passed in to the method.
- .querySelector()
    - Use CSS selector strings
    - Returns FIRST element that matches argument
- .querySelectorAll()
    - Returns ALL elements that match argument

## Node Properties
- innerText
    - Returns all of the text content inside of the selected node.
- innerHTML
    - Returns the HTML inside of the selected node.
- className
    - Gets or sets the value of the selected nodes class
- classList
    - Object that allows us to add or remove classes from an element. To do this, use its 'add', 'remove', and 'toggle' methods.
    - ```JS 	
        const myList = document.getElementById('myList');
        
        // Add A Class
        myList.classList.add('show');
        
        // Remove A Class
        myList.classList.remove('show');
        
        // Toggle A Class
        myList.classList.toggle('show');
        ```
    - Each method checks if the passed in string matches the class of the selected node.  Add will attach the passed in class if the element doesn't contain, remove will remove the passed in class if the element does contain it, and toggle will toggle the class.
- style
    - Attaches inline style
    - Will override ANY CSS
- value
    - Used with input boxes to access what has been typed into the selected input box.
    - Does not return the placeholder

## Events and Event Handlers
- Events
    - Actions triggered by interaction with DOM nodes.
    - Events can be attached to the opening tag of an HTML file
    - Events:
        - onclick
        - ondblclick
        - onmouseover
        - onmouseout
        - onkeypress
        - onkeydown
        - onkeyup
        - onchange
    - HTML format
    ```JS
    <tagname eventName="functionHere"></tagname>
    ```
    - Example:
    ```JS
    <button onclick="submit()">Submit</button>

    function submit() {
        alert('Post has been submitted')
    }
    ```
- Event Lisenters
    - Can also be attached to elements
    - Takes two arguments
        - The event to listen for
        - a callback function to provide the action that happens when the event fires
    - Example
    ```JS
    <input type="text" id="myInput">

    let inputValue = ''
    document.getElementById('myInput').addEventListener('change', function(event){
        inputValue = event.target.value
        console.log(inputValue)
    })
    ```
    - event.target.value is a very common syntax
- Event Bubbling
    - Refers to how events can 'bubble' up the DOM tree.
    - It occurs when a parent element has the same event as the child element
    - The parent event WILL fire when the child's does.
    - To prevent this, we can use the .stopPropagation() method.
- Prevent default events
    - Some elements have default events attached to them
    - Common example is the form element
    - To prevent these, use the preventDefault() method
    - .preventDefault()

- Node Methods
    - .createElement()
        - Works with .appendChild to create an element and attach it to the DOM
        ```JS
        cons btn = document.createElement('BUTTON');

        btn.innerText = 'Click me'

        document.body.appendChild(btn);
        ```
    - .appendChild()
    - .remove()
    - .getAttribute(attribute to get)
        - Allows you to get or set the value of a given attribute.
    - .setAttribute(attribute to set, value)
    - .parentNode
        - *property, not method*
        - Returns parent node of selected element
    