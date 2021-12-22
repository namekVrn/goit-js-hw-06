const queryResult = {
    totalNumberCategories: document.querySelectorAll('.item'),
    heading: document.querySelectorAll('h2'),
    childerUl: document.querySelectorAll('ul'),
    categories: document.querySelector('.categories')

}
const categoriesListEl = document.querySelectorAll('.item').length;
console.log('Number of categories:', categoriesListEl);

//first variant


const categoriesListTitleFirstEl =
  document.querySelector('#categories').firstElementChild.firstElementChild
    .textContent;
console.log('Category:', categoriesListTitleFirstEl);

// const categoriesListTextFirstEl = document
//   .querySelector('#categories')
//   .firstElementChild.querySelectorAll('li').length;

// console.log('Elements:', categoriesListTextFirstEl);

// //second element
// const categoriesListTitleSecondEl =
//   document.querySelector('#categories').children[1].firstElementChild
//     .textContent;
// console.log('Category:', categoriesListTitleSecondEl);

// const categoriesListTitleLengthSecondEl = document
//   .querySelector('#categories')
//   .children[1].lastElementChild.querySelectorAll('li').length;
// console.log('Elements:', categoriesListTitleLengthSecondEl);

// //last element
// const categoriesListTitleLastEl =
//   document.querySelector('#categories').lastElementChild.firstElementChild
//     .textContent;
// console.log('Category:', categoriesListTitleLastEl);

// const categoriesListTextLastEl = document
//   .querySelector('#categories')
//   .lastElementChild.querySelectorAll('li').length;

// console.log('Elements:', categoriesListTextLastEl);

// function getListCategories(Object){
//     const {totalNumberCategories, heading, childerUl } = Object
// console.log(`Number of categories: ${totalNumberCategories.length}`)



// console.log(`Category: ${heading[0].textContent}`)
// console.log(`Elements: ${childerUl[1].children.length}`)

// console.log(`Category: ${heading[1].textContent}`)
// console.log(`Elements: ${childerUl[2].children.length}`)

// console.log(`Category: ${heading[2].textContent}`)
// console.log(`Elements: ${childerUl[3].children.length}`)

// getListCategories(queryResult)





