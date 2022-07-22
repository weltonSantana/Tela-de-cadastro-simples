let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validemail = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelconfirmsenha = document.querySelector('#labelconfirmsenha')
let validconfirmsenha = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

function validacaoemail(email) {
  let emailval = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z]{2,4})$/
  return emailval.test(email)
}

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 5) {
    labelnome.setAttribute('style', 'color: red')
    labelnome.innerHTML = 'Nome *Insira no minimo 6 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validnome = false
  } else {
    labelnome.setAttribute('style', 'color: green')
    labelnome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validnome = true
  }
})

email.addEventListener('keyup', () => {
  if (validacaoemail(email.value) != true) {
    labelemail.setAttribute('style', 'color: red')
    labelemail.innerHTML = 'Email *Insira um email valido'
    email.setAttribute('style', 'border-color: red')
    validemail = false
  } else {
    labelemail.setAttribute('style', 'color: green')
    labelemail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validemail = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 7) {
    labelsenha.setAttribute('style', 'color: red')
    labelsenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validsenha = false
  } else {
    labelsenha.setAttribute('style', 'color: green')
    labelsenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validsenha = true
  }
})

confirmsenha.addEventListener('keyup', () => {
  if (senha.value != confirmsenha.value) {
    labelconfirmsenha.setAttribute('style', 'color: red')
    labelconfirmsenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmsenha.setAttribute('style', 'border-color: red')
    validconfirmsenha = false
  } else {
    labelconfirmsenha.setAttribute('style', 'color: green')
    labelconfirmsenha.innerHTML = 'Confirmar Senha'
    confirmsenha.setAttribute('style', 'border-color: green')
    validconfirmsenha = true
  }
})

function cadastrar() {
  let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

  listaUsuario.push({
    Cadnome: nome.value,
    cadEmail: email.value,
    cadSenha: senha.value
  })

  localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))

  if (validnome && validemail && validsenha && validconfirmsenha) {
    msgSucesso.setAttribute('style', 'display: block')
    msgSucesso.innerHTML = 'Usuario Cadastrado'
    msgErro.innerHTML = ''
    msgErro.setAttribute('style', 'display: none')

    setTimeout(() => {
      window.location.href = 'http://127.0.0.1:5500/pages/login/Login.html'
    }, 3000)
  } else {
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Preencha todos os campos corretamente'
    msgSucesso.innerHTML = ''
    msgSucesso.setAttribute('style', 'display: none')
  }
}
