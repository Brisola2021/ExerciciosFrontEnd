var nome = window.document.querySelector('#nome')
var email = window.document.querySelector('#email')
var assunto = window.document.querySelector('#assunto')

var okNome = false
var okEmail = false 
var okAssunto = false

let mapa = document.querySelector('#mapa')

function validarNome() {

    let txtNome = document.getElementById('txtNome')
    nome.style.width = '25%'
    if(nome.value.length < 2) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        okNome = false
    }else {
        txtNome.innerHTML = 'Bem vindo!!'
        txtNome.style.color = 'green'
        okNome = true
    }
}

function validarEmail() {
    let txtEmail = document.getElementById('txtEmail')
    email.style.width = '25%'
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)  {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        okEmail = false
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        okEmail = true
    }
}

function validarAssunto() {
    let txtAssunto = document.getElementById('txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande. Digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        okAssunto = false
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.innerHTML = 'Texto válido'
        txtAssunto.style.color = 'green'
        okAssunto = true
        txtAssunto.style.display = 'none'
}

}


function enviar() {
    if (okNome == true && okEmail == true && okAssunto == true ){
        alert('mesagem enviada com sucesso!!')
    }else {
        alert('Erro ao enviar formulario. Preencha corretamente!')
    }

    }

    function mapaZoom() {
        mapa.style.width = '800px'
        mapa.style.height = '600px'

    }

    function mapaNormal() {
        mapa.style.width = '400px'
        mapa.style.height = '300px'

    }
