const itemField = document.querySelector("#add-item-field")
const itemBtn = document.querySelector("#add-item-btn")
const shoppingList = document.querySelector("#shopping-list")

// Get value of input field
// Create a list item from it
// When user clicks item, it removes item
const addIngredient = () => {
    let ingredient = document.createElement('li');
    ingredient.innerText = itemField.value
    ingredient.className = "ingredients"
    ingredient.addEventListener('click', () => {
        ingredient.remove()
    })
    shoppingList.appendChild(ingredient)
    itemField.value  = ''
}

itemField.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        addIngredient()
    }
})










// itemField.addEventListener('keypress', event => {
//     console.log(event)
//     console.log(event.target.value)
// })
// document.getElementById("child").addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('child button clicked')
// })
// document.getElementById("form-btn").addEventListener('click', event => {
//     event.preventDefault()
//     console.log('form submitted')
// })