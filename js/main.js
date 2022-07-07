const menuBtn = document.querySelector('.menuBtn')
const menuB = document.querySelector('.menuB')
const links = document.querySelectorAll('ul')
const secondLink = document.querySelector('.secondLink')

const nav = document.querySelector('nav')
const big = document.querySelectorAll('.bigCon')


// mobile nav
menuB.addEventListener('click', ()=>{
    secondLink.classList.toggle('addHeight')
    console.log(navCon)
})

//tablet nav
menuBtn.addEventListener('click', ()=>{
    links.forEach((item) => {
        item.classList.toggle('addHeight')
    })
    console.log(navCon)
})

// fixed nav
window.addEventListener('scroll', ()=>{
    const navHeight = nav.getBoundingClientRect().height
    const height = window.pageYOffset
    if(height > navHeight){
        nav.classList.add('fixedNav')
    }else{
        nav.classList.remove('fixedNav')
    }
})

// footer mobile content
Array.from(big).forEach((items)=>{
    console.log(items)
    const leftArrow = items.querySelector('.left')
    leftArrow.addEventListener('click', _=>{
        big.forEach((item)=>{
            if(item !== items){
                item.classList.remove('addContent')
            }
        })
        items.classList.toggle('addContent')
    })   
})

// *** Another option, selecting the parent element
// const leftArrow = document.querySelectorAll('.left')
// Array.from(leftArrow).forEach((el)=> {
//     el.addEventListener('click', (e)=>{
//         const content = e.currentTarget.parentElement.parentElement
//         const.classList.toggle('addContent')
//     })
    
// });

// *** Another approach, selecting the parent ele
// Array.from(leftArrow).forEach( item => {
//     item.addEventListener('click', openContent)
// } )

// function openContent(e) {
//     let contentParent = this.parentNode.children
//     let content = contentParent[contentParent.length - 1]
//     console.log(content)
//     content.classList.toggle('content')
// }

