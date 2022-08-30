nomeArray = []
senhaArray = []
nomeAux = []
senhaAux = []
index = parseInt(0)

SelecionarOpcao()

console.log(nomeArray)
console.log(senhaArray)

function SolicitarNome() {
    var nome = prompt("Insira o seu nome")
    return nome
}

function SolicitarSenha() {
    var senha = prompt("Insira uma senha")
    return senha
}
function FazerCadastro(nome,senha){
    index = nomeArray.length
    nomeArray[index] = nome
    senhaArray[index] = senha
    console.log(nomeArray)
    console.log(senhaArray)
}

function FazerLogin(nome, senha) {
    erro = true
    for (index = 0; index < nomeArray.length; index++) {
        if (nome == nomeArray[index] && senha == senhaArray[index]) {
            alert("Login feito com sucesso!")
            erro = false
        }
    }
    if (erro == true) {
        alert("Nome ou senha incorretos.")
    }
}

function ExcluirCadastro(nome) {
    excluir = false
    for (index = 0; index < nomeArray.length; index++) {
        if (nome == nomeArray[index]) {
            alert("Cadastro excluído!")
            nomeArray[index] = 0
            senhaArray[index] = 0
            excluir = true
        }
    }
    if (excluir == true) {
        for (index = 0; index < nomeArray.length - 1; index++) {
            for (var seguinte = index + 1; seguinte < nomeArray.length; seguinte++) {
                if (nomeArray[index] == 0) {
                    nomeArray[index] = nomeArray[seguinte]
                    senhaArray[index] = senhaArray[seguinte]
                    nomeArray[seguinte] = 0
                    senhaArray[seguinte] = 0
                }
            }
        }
        for (index = 0; index < nomeArray.length; index++) {
            if (nomeArray[index] != 0) {
                nomeAux[index] = nomeArray[index]
                senhaAux[index] = senhaArray[index]
            }
        }
    
    }else if(excluir == false){
        alert("ERRO! Usuário com esse nome não encontrado.")
    }

    nomeArray = nomeAux
    senhaArray = senhaAux
    nomeAux = []
    senhaAux = []
    console.log(nomeArray)
    console.log(senhaArray)
}

function SelecionarOpcao() {
    continuar = true
    while (continuar == true) {
        opcao = prompt("O que deseja fazer? \n1 - Cadastro \n2 - Login \n3 - Excluir Cadastro \n4 - Encerrar Programa")
        while (opcao < 1 || opcao > 4) {
            opcao = prompt("Selecione uma opção válida: \n1 - Cadastro \n2 - Login \n3 - Excluir Cadastro \n4 - Encerrar Programa")
        }
        if (opcao == 1) {
            alert("Opção de cadastro selecionado:")
            FazerCadastro(SolicitarNome(), SolicitarSenha())
        }
        if (opcao == 2) {
            alert("Opção de login selecionado:")
            FazerLogin(SolicitarNome(), SolicitarSenha())
        }
        if (opcao == 3) {
            alert("Opção de excluir cadastro selecionado:")
            ExcluirCadastro(SolicitarNome())
        }
        if (opcao == 4) {
            alert("Programa encerrado.")
            continuar = false

        }
    }
}