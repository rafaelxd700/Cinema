// Recupera os parâmetros enviados pela URL
const parametros = new URLSearchParams(window.location.search);

// Obtém os dados da sessão selecionada
const filme = parametros.get("filme");
const horario = parametros.get("horario");
const sala = parametros.get("sala");
const preco = parametros.get("preco");

// Exibe os dados na página
document.getElementById("filme").textContent = filme || "Não informado";
document.getElementById("horario").textContent = horario || "Não informado";
document.getElementById("sala").textContent = sala || "Não informada";
document.getElementById("preco").textContent = preco
    ? Number(preco).toFixed(2).replace(".", ",")
    : "0,00";