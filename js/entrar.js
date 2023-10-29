const usuarios = [
    {
        login: "adrielli_evelyn@gmail.com",
        pass: rheasy123
    }

]

let botao = document.getElementById('botaoEntrar')

botao.addEventListener('click', function logar() {

    let pegaUsuario = document.getElementById('nomeUsuario').value
    let pegaSenha = document.getElementById('senha').value

    for(let i in usuarios) {

        if(pegaUsuario == usuarios[i].login) {
            alert('ok')
        } else {
            alert('erro')
        }

    }

})

