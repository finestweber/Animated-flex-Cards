const mode = document.getElementById('mode_icon');
mode.addEventListener('click', () => {
    const form =  document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');

    form.classList.remove('dark');
});

 /**mudar de pagina */
 // Adicionando um evento de clique ao botão "Voltar"
 document.getElementById("back_button").addEventListener("click", function() {
    // Redirecionando para a página desejada
    window.location.href = "index.html"; // Altere "pagina_anterior.html" para o nome da sua página anterior
});

/*Cadastrar no local storage */
// Função para cadastrar usuário
function cadastrar() {
    // Seleciona os elementos dos campos de entrada
    const nome = document.querySelector('#name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmaSenha = document.querySelector('#confirmaSenha');

    // Verifica se a senha e a confirmação são iguais
    if (password.value !== confirmaSenha.value) {
        alert("A senha e a confirmação de senha não correspondem!");
        return;
    }

    // Cria um objeto com os dados do usuário
    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: password.value
    };

    // Adiciona o usuário ao localStorage
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];
    listaUsuarios.push(usuario);
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

    // Limpa os campos do formulário após cadastrar
    nome.value = '';
    email.value = '';
    password.value = '';
    confirmaSenha.value = '';

    // Exibe uma mensagem de sucesso
    alert("Usuário cadastrado com sucesso!");
}

// Adiciona o evento de clique ao botão de cadastro
document.getElementById("login_button").addEventListener("click", cadastrar);
