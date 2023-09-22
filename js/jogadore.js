//Dom

const nomejogador = document.querySelector('#nomeJogador')
const imagem = document.querySelector('#imagem')
const bt1 = document.querySelector('#btHa')
const bt2 = document.querySelector('#btCr7')
const bt3 = document.querySelector('#btMba')
const bt4 = document.querySelector('#btNey')
const bt5 = document.querySelector('#btDy')
const bt6 = document.querySelector('#btMe')

//eventos
bt1.addEventListener('click',haalland)
bt2.addEventListener('click',cr7)
bt3.addEventListener('click',mbappe)
bt4.addEventListener('click',neymar)
bt5.addEventListener('click',dybala)
bt6.addEventListener('click',messi)


//funcões

function haalland(){
 imagem.src="img/haaland.png"   
}
function cr7(){
imagem.src="img/cr7.jpg"
}
function mbappe(){
    imagem.src="img/mbappe.jpg"

}
function neymar(){
    imagem.src="img/neymar.jpg"

}
function dybala(){
    imagem.src="img/dybala.jpg"

}
function messi(){
    imagem.src="img/messi.jpg"

}

