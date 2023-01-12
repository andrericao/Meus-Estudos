const usuarios = [
  {
    login: 'victor',
    pass: 'victor'
  },
  {
    login: 'julio',
    pass: 'julio'
  },
  {
    login: 'admin',
    pass: 'admin'
  }
]

let botao = document.getElementById('btnLogar');
let validaLogin = false;

botao.addEventListener('click', function logar() {
  let pegaUsuario = document.getElementById('usuario').value;
  let pegaSenha = document.getElementById('senha').value;

  for(let i in usuarios) {

    if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {

      validaLogin = true
      break

    }
  }
  if(validaLogin == true) {

    alert('OK')
    location.href = "index.html"

  } else {

    alert('Usuario e senha incorretos!')

  }
}
)

