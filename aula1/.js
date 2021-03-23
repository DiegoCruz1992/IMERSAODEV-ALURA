var valorEmDolarTexto = prompt("Qual valor em dolar você quer converter?")

var valorEmDolarNum = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNum * 5.49
var valorFinal = valorEmReal.toFixed(2)

alert("O valor é de " + valorFinal + " reais")