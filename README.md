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
    - return all of the text content inside of the selected node.
- innerHTML
    - return the HTML inside of the selected node.
- className
    - get or set the value of the selected nodes class
- classList
    - object that allows us to add or remove classes from an element. To do this, use its 'add', 'remove', and 'toggle' methods.
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
    - Attaches inline styles
- value
    - Used with input boxes to access what has been typed into the selected input box.