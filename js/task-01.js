const queryResult = {
    totalNumberCategories: document.querySelectorAll('.item'),
    heading: document.querySelectorAll('h2'),
    childerUl: document.querySelectorAll('ul')
}
function getListCategories(Object){
    const {totalNumberCategories, heading, childerUl } = Object
console.log(`Number of categories: ${totalNumberCategories.length}`)
console.log(`Category: ${heading[0].textContent}`)
console.log(`Elements: ${childerUl[1].children.length}`)

console.log(`Category: ${heading[1].textContent}`)
console.log(`Elements: ${childerUl[2].children.length}`)

console.log(`Category: ${heading[2].textContent}`)
console.log(`Elements: ${childerUl[3].children.length}`)
}
getListCategories(queryResult)





