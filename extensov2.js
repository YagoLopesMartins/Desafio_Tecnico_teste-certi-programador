unidades = ["um","dois","três","quatro","cinco","seis","sete", "oito", "nove"]

dezenas = ["dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta",
"oitenta", "noventa"]

centenas = ["cem","duzentos","trezentos","quatrocentos","quinhentos","seiscentos",
"setecentos", "oitocentos","novecentos"]

numero = String(321);

primeiro = numero[2];
segundo = numero[1];
terceiro = numero[0];
/* console.log(numero)
console.log(numero[2])
console.log(numero[1])
console.log(numero[0]) */
console.log(centenas[parseInt(terceiro-1)])
console.log(dezenas[parseInt(segundo-1)])
console.log(unidades[parseInt(primeiro-1)])



