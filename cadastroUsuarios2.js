// 2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
// login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
// opção escolhida pelo usuário.
// 3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
// senha, depois procure o nome recebido no array de nomes e em caso positivo
// compare a senha no array de senhas. Se as duas comparações forem válidas
// retorne true se uma delas não for válida retorne false.
// 4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
// então procure pelo nome no array de nomes e exclua ele e a senha correspondente
// do outro varray, por fim organize o array para eliminar os espaços vazios.
// 5. Utilizando as funções criadas faça o fluxo de funcionamento do código, considere
// que o usuário pode escolher quando encerrar o programa conforme as opções e
// que no login caso seja bem sucedido retorna uma mensagem “Login feito com
// sucesso!” e em caso negativo “Nome ou senha incorretos!”

function SolicitarNome() {
    var nome = prompt("Insira o seu nome")
    return nome
}

function SolicitarSenha() {
    var senha = prompt("Insira uma senha")
    return senha
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
            nomeArray[index] = SolicitarNome()
            senhaArray[index] = SolicitarSenha()
            index++
        }
        if (opcao == 2){
            alert("Opção de login selecionado:")
        } 
        if (opcao == 3){
            alert("Opção de excluir cadastro selecionado:")
        } 
        if(opcao == 4){
            alert("Programa encerrado.")
            continuar = false
            
        }
    }
}

nomeArray = []
senhaArray = []
index = parseInt(0)

SelecionarOpcao()

console.log(nomeArray)
console.log(senhaArray)

