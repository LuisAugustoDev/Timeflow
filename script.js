
  const popup = document.getElementById("popup");
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.querySelector(".close-btn");
  const saveEvent = document.getElementById("saveEvent");

  // Abre o popup ao clicar no botão
  openPopup.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  // Fecha o popup ao clicar no "X"
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Fecha o popup ao clicar fora dele
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  // Salva os dados e exibe no console (pode ser alterado para outra função)
  saveEvent.addEventListener("click", function () {
    const eventName = document.getElementById("event-name").value;
    const eventTime = document.getElementById("event-time").value;
    const eventLocation = document.getElementById("event-location").value;

    if (eventName && eventTime && eventLocation) {
      console.log(`Evento: ${eventName}, Horário: ${eventTime}, Local: ${eventLocation}`);
      alert("Evento salvo com sucesso!");
      popup.style.display = "none";
    } else {
      alert("Preencha todos os campos!");
    }
  });

function atualizarTotal() {
  let tabela = document.getElementById("tabela-compromissos").getElementsByTagName("tbody")[0];
  let total = tabela.rows.length; // Conta quantas linhas existem no <tbody>

  document.getElementById("total-compromissos").innerText = total; // Atualiza o <tfoot>
}

// Chame essa função sempre que um novo compromisso 
function adicionarCompromisso() {
  let evento = document.getElementById("evento").value;
  let horario = document.getElementById("horario").value;
  let local = document.getElementById("local").value;

  if (evento === "" || horario === "" || local === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  let tabela = document.getElementById("tabela-compromissos").getElementsByTagName("tbody")[0];
  let novaLinha = tabela.insertRow();

  let celulaEvento = novaLinha.insertCell(0);
  let celulaHorario = novaLinha.insertCell(1);
  let celulaLocal = novaLinha.insertCell(2);

  celulaEvento.innerText = evento;
  celulaHorario.innerText = horario;
  celulaLocal.innerText = local;

  document.getElementById("evento").value = "";
  document.getElementById("horario").value = "";
  document.getElementById("local").value = "";

  popup.style.display = "none";
  ordenarTabela(1);
  atualizarTotal(); // Atualiza a contagem no <tfoot>
}

function adicionarCompromisso() {
  let evento = document.getElementById("evento").value;
  let horario = document.getElementById("horario").value;
  let local = document.getElementById("local").value;

  if (evento === "" || horario === "" || local === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  let tabela = document.getElementById("tabela-compromissos").getElementsByTagName("tbody")[0];
  let novaLinha = tabela.insertRow();

  let celulaEvento = novaLinha.insertCell(0);
  let celulaHorario = novaLinha.insertCell(1);
  let celulaLocal = novaLinha.insertCell(2);

  celulaEvento.innerText = evento;
  celulaHorario.innerText = horario;
  celulaLocal.innerText = local;

  document.getElementById("evento").value = "";
  document.getElementById("horario").value = "";
  document.getElementById("local").value = "";

  popup.style.display = "none";
  
  atualizarTotal(); 
}

document.addEventListener("DOMContentLoaded", function () {
    const tabela = document.getElementById("tabela-compromissos");
    const cabecalhos = tabela.querySelectorAll("th");
    
    cabecalhos.forEach((cabecalho, indice) => {
        cabecalho.addEventListener("click", () => {
            ordenarTabela(indice);
        });
    });

    function ordenarTabela(coluna) {
        const tbody = tabela.querySelector("tbody");
        const linhas = Array.from(tbody.querySelectorAll("tr"));
        const tipoDado = linhas[0].cells[coluna].innerText;

        const comparador = (a, b) => {
    let valorA = a.cells[coluna].innerText.trim();
    let valorB = b.cells[coluna].innerText.trim();

    // Verifica se o valor segue o formato HH:MM
    if (/^\d{1,2}:\d{2}$/.test(valorA) && /^\d{1,2}:\d{2}$/.test(valorB)) {
        return converterHorario(valorA) - converterHorario(valorB);
    }

    return valorA.localeCompare(valorB);

        };

        const ordenado = linhas.sort(comparador);

        // Reorganizar as linhas na tabela
        tbody.innerHTML = "";
        ordenado.forEach(linha => tbody.appendChild(linha));
    }

    function converterHorario(horario) {
    let partes = horario.split(":").map(Number);
    return partes[0] * 60 + partes[1]; 
    }

});


atualizarTotal();
