const spanMess = document.querySelector('span.mess-with-me');
spanMess.style.fontSize = '40px'

const pMess = document.querySelector('p.mess-with-me');
pMess.style.backgroundColor = 'green'

const hideImg = document.querySelector('#hide-me-area');
hideImg.style.display = 'none'

const reSize = document.querySelector('#triceratops');
reSize.style.width = '324px'

function textOrange(){
    const modify = document.querySelector('span.mess-with-me');
    modify.style.color = 'orange'
}

const clickOrange = document.querySelector('span.mess-with-me');
clickOrange.addEventListener('click', textOrange);

function redBorder(){
    const modify = document.querySelector('#triceratops');
    modify.style.border = '1px solid red'
}

const borderRed= document.querySelector('#triceratops');
borderRed.addEventListener('click', redBorder)

const fiftyOp= document.querySelector('#feathers');
fiftyOp.addEventListener('click', function (){
    fiftyOp.style.opacity = '0.5'
})

const changeBg = document.querySelector('#toggle');
changeBg.addEventListener('click', function (){
    const rowBg = document.querySelector('#row');
    if(rowBg.style.backgroundColor === 'lightblue'){
        rowBg.style.backgroundColor = 'white'
    }
    else{
        rowBg.style.backgroundColor = 'lightblue'
    }
});

const hover = document.querySelector('#biggify');
hover.addEventListener('mouseover', function (){
    hover.style.width = '200px'
})
hover.addEventListener('mouseout', function (){
    hover.style.width = '162px'
})

