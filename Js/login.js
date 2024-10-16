function cadastro() {
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')

    if (!email || !senha) {
        window.alert('Cadastro com sucesso!')
    }else {
        window.alert('Cadastro incompleto!')
    }
}