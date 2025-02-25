document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formulario"); // Correção: usar "#" para selecionar o ID

    if (!form) {
        console.error("Erro: Formulário não encontrado!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const email = form.querySelector('input[name="email"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();

        if (email === "" || password === "") {
            alert("Por favor, preencha todos os campos");
        } else {
            window.location.href = "home.html"; // Redireciona para a tela home
        }
    });
});
