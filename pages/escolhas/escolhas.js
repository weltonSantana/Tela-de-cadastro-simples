let userlogado = JSON.parse(localStorage.getItem('userlogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá, ${userlogado.email}`

if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'http://127.0.0.1:5500/pages/login/Login.html'
}

function sair() {
  localStorage.removeItem('token')
  window.location.href = 'http://127.0.0.1:5500/pages/login/Login.html'
}
