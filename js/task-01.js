const queryResult = {
    totalNumberCategories: document.querySelectorAll('.item'),
    heading: document.querySelectorAll('h2'),
    childerUl: document.querySelectorAll('ul'),
    categories: document.querySelector('.categories')
}
console.log("Number of categories:", queryResult.totalNumberCategories.length)
// const test = queryResult.totalNumberCategories
// test.map((iter)=>{
    
//     const categoryName = iter.children[0].textContent
//     const categoryLength = iter.lastElementChild.children.length
//     console.log(`Category: ${categoryName}\nElements: ${categoryLength}`)
//})
queryResult.totalNumberCategories.forEach((iter)=>{
    const categoryName = iter.children[0].textContent
    const categoryLength = iter.lastElementChild.children.length
    console.log(`Category: ${categoryName}\nElements: ${categoryLength}`)
}
)
