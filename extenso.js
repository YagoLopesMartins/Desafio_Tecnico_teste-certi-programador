unidades = ["um","dois","três","quatro","cinco","seis","sete", "oito", "nove"]
dezenas_onze_ao_dezenove = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis",
"dezessete", "dezoito", "dezenove"]
dezenas = ["dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta",
"oitenta", "noventa"]
centenas = ["cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos",
"setecentos", "oitocentos","novecentos"]
milhares = "mil";

function verifica_tamanho_array(vetor){
    tamanho = vetor.length;

    return tamanho;
}

numero = String(9);

console.log(verifica_tamanho_array(numero));

// Casos verificados
// UNIDADES
// SE 
// DEZENAS
// CENTENAS

primeiro_digito_array_comecando_direita_para_esquerda = numero[2];
segundo_digito_array_comecando_direita_para_esquerda = numero[1];
terceiro_digito_array_comecando_direita_para_esquerda = numero[0];
/* console.log(numero)
console.log(numero[2])
console.log(numero[1])
console.log(numero[0]) */
console.log(centenas[parseInt(terceiro_digito_array_comecando_direita_para_esquerda-1)])
console.log(dezenas[parseInt(segundo_digito_array_comecando_direita_para_esquerda-1)])
console.log(unidades[parseInt(primeiro_digito_array_comecando_direita_para_esquerda-1)])



