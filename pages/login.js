function entrar() {
  let email = document.querySelector('#email')
  let emaillabel = document.querySelector('#emaillabel')

  let senha = document.querySelector('#senha')
  let senhalabel = document.querySelector('#senhalabel')

  let msgErro = document.querySelector('#msgErro')

  let listaUsuario = []

  let validUser = []

  listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

  listaUsuario.forEach(item => {
    if (
      email.value != '' &&
      email.value == item.cadEmail &&
      senha.value != '' &&
      senha.value == item.cadSenha
    ) {
      validUser = {
        nome: item.Cadnome,
        email: item.cadEmail,
        senha: item.cadSenha
      }
    }
  })

  if (email.value == validUser.email && senha.value == validUser.senha) {
    window.location.href = 'http://127.0.0.1:5500/pages/escolhas/escolhas.html'

    let token = Math.random().toString(16).substr(2)
    localStorage.setItem('token', token)

    localStorage.setItem('userlogado', JSON.stringify(validUser))
  } else {
    emaillabel.setAttribute('style', 'color: red')
    email.setAttribute('style', 'border-color: red')
    senhalabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Email ou senha incorretos!'
    email.focus()
  }
}
