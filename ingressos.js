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

// Recupera os campos do formulário
const tipoIngresso = document.getElementById("tipo");
const quantidade = document.getElementById("quantidade");

// Formata valores para reais
function formatarMoeda(valor) {
    return valor.toFixed(2).replace(".", ",");
}

// Calcula o valor total
function calcularTotal() {

    const precoBase = Number(preco);
    let valorUnitario = precoBase;
    const quantidadeEscolhida = Number(quantidade.value);

    // Aplica desconto da meia-entrada
    if (tipoIngresso.value === "meia") {
        valorUnitario = precoBase / 2;
    }

    // Atualiza o preço unitário
    document.getElementById("preco").textContent =
        formatarMoeda(valorUnitario);

    // Verifica se os dados são válidos
    if (
        !tipoIngresso.value ||
        !Number.isInteger(quantidadeEscolhida) ||
        quantidadeEscolhida < 1 ||
        quantidadeEscolhida > 10
    ) {
        document.getElementById("total").textContent = "R$ 0,00";
        return;
    }

    // Calcula o total
    const total = valorUnitario * quantidadeEscolhida;

    document.getElementById("total").textContent =
        "R$ " + formatarMoeda(total);
}

// Atualiza o cálculo quando os campos mudarem
tipoIngresso.addEventListener("change", calcularTotal);
quantidade.addEventListener("input", calcularTotal);