
let change = document.querySelector('.change')
let cards = document.querySelectorAll('.cards')
let humb = document.querySelector('.humb')


cards.forEach((e)=>{
  e.addEventListener('click', (el)=>{
    let target = el.target
    change.src = target.src
    document.querySelector('.active').classList.remove('active')
    target.classList.add('active')
    console.log(el.target.src);
  })
})


let be = true;


humb.addEventListener('click', ()=>{

  (be == true) ? yes() : no()

})

function yes(){
  humb.src = 'icons/close.png'
  document.querySelector('.navlist').style.left = 0
  be = false
}

function no(){
  be = true
  humb.src = 'icons/hamburger.svg'
  document.querySelector('.navlist').style.left = '-100%'
}



