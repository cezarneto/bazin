function calcularPrecoTeto() {
  const valorDividendos = parseFloat(document.getElementById("valorDividendos").value);

  if (isNaN(valorDividendos) || valorDividendos <= 0) {
    alert("O valor dos dividendos deve ser um número positivo.");
    return;
  }

  const taxaDesconto = 0.06;
  const precoTeto = valorDividendos / taxaDesconto;

  document.getElementById("precoTeto").textContent = precoTeto.toFixed(2);
}
