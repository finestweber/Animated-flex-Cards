document.addEventListener('DOMContentLoaded', function() {
    // Função para lidar com o evento de submissão do formulário de login
    function autenticarEvento(event) {
        // Prevenir o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Obter os valores dos campos de email e senha
        const email = document.querySelector('#email_login').value;
        const senha = document.querySelector('#password_login').value;

        // Carregar a lista de usuários armazenada no localStorage
        const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];

        // Verificar se existe um usuário com o email e senha fornecidos na lista de usuários
        const usuarioAutenticado = listaUsuarios.find(user => user.email === email && user.senha === senha);

        // Se o usuário for encontrado, exibir um alerta de "Login bem-sucedido!" e redirecionar para outra página
        if (usuarioAutenticado) {
            alert('Login bem-sucedido!');
            window.location.href = "http://127.0.0.1:5500/css_sliding_cards/index.html";
        } else {
            // Se o usuário não for encontrado, exibir um alerta de "Email ou senha inválidos. Tente novamente."
            alert('Email ou senha inválidos. Tente novamente.');
        }
    }

    // Adicionar um ouvinte de evento para o evento de submissão do formulário
    document.getElementById("login_form").addEventListener("submit", autenticarEvento);
});
// Arquivo sccript-login.js

// Função para entrar


