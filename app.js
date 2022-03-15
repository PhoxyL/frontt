// GET ELEMENT BY ID
let input = document.getElementById('task')
input.style.background = 'black'
input.style.height = '70px'
console.log(input)

let div = document.getElementById('main')
div.style.background = 'magenta'

// GET ELEMENT BY CLASS NAME  

// let list=document.getElementsByClassName('collection')
let list = document.getElementsByClassName('collection')[0]
console.log(list)

let lis=document.getElementsByClassName('collection-item')
console.log(lis)

lis[0].textContent='Hello World'
lis[0].style.background = 'black'
lis[0].style.color = 'white'


// lis[2].innerHTML='<h2>You are Welcome </h2>'
// lis[2].style.background = 'yellow'


// lis[1].innerHTML='<b> second line </b>'
// lis[1].style.background = 'green'


// lis[3].innerHTML='<b> welcome to Nigeria </b>'
// lis[3].style.background = 'orange'


//get element by tag name 

// let list = document.getElementsByTagName('li')[0]
// list.style.fontSize = '45px'

// let button = document.getElementsByClassName('clear-tasks')[0]
// console.log(button)
// button.classList.add('but')
// button.classList.remove('black')

// let list = document.querySelector('#task')
// let list = document.querySelector('.collection-items')
// let lis = document.querySelector('li:last-child').style.color = 'yellow'
// let lis = document.querySelector('li:nth-child(2)').style.color = 'cyan'
// console.log(lis)



// for loop
// for(let i=0;i<=100; i++){
//     console.log(i)
// }

// for (let j=20;j>100)

// let list=document.querySelectorAll('li:nth-child(odd)')
// // console.log(list)
// list.forEach(function(li, index){
//     li.getElementsByClassName.background='#ccc'
// })


// // classwork
// let liss=document.querySelectorAll('li:nth-child(even)')
// console.log(list)

// for(let i = 0;i < list.length; i++){
// liss[i].style.background='magenta'
// }


// // creating Element

// const li = document.createElement('li')
// // add class
// li.className = 'collection-item'

// // add class
// li.id = 'new-item'

// //add attribute
// li.setAttribute('title' , 'New items')

// // create a textNode and append

// li.appendChild(document.createTextNode('Hello World'))
// // append li as a child to ul
// document.querySelector('ul.collection').appendChild(li)


// // create link

// const link = document.createElement('a')
// // add class
// link.className = "delete-item secondary-content"
// // add icon
// link.innerHTML = ' <i class="fa fa-remove"></i>'
// // append to li 
// li.appendChild(link)

// //how to replace Element
// const newHeading = document.createElement('h1')
// // add id
// newHeading.id = 'task-title'


// // new Textnode 

newHeading.appendChild(document.createTextNode('Task List'))


// cut old Heading
const oldHeading = document.getElementById('task-title')

// select parent

const cardAction = document.querySelector (".card-action")

// replace
// cardAction.replaceChild(newHeading,oldHeading,)

//romove element

// const lis = document.query

// Attributes
// let val= document.querySelector('.clear-task')
// console.log(val)
// val.getAttribute('href')
// val.setAttribute('http://www.facebook.com')

// add image

// let image =document.querySelector('img')
// image.getAttribute('src')
// image.setAttribute('src', '')

// let button=document.querySelector('.clear-tasks')
// button.addEventListener('click',fuction(e){
//     console.log('Hello World')
//     e.preventDefault()
// })

// local Storage
localStorage.setItem('name' , 'John Doe')