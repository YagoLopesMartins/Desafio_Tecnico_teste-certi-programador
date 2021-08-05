unidades = ["zero","um","dois","três","quatro","cinco","seis","sete", "oito", "nove"]

dezenas_onze_ao_dezenove = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis",
"dezessete", "dezoito", "dezenove"]

dezenas = ["dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta",
"oitenta", "noventa"]

centenas = ["cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos",
"setecentos", "oitocentos","novecentos"]

milhares = "mil";


function verifica_tamanho_array(vetor){

    tamanho = 0;

    tamanho = vetor.length;

    return tamanho;
}

function verifica_numero_nas_unidades_array(vetor){

    numero = 0;

    numero = vetor[1];
    return numero;
}
function verifica_numero_nas_dezenas_array(vetor){
    numero = vetor[0];
    return numero;
}

function escreve_por_extenso_numero(numero){

    nome_por_extenso = "";

    if (verifica_tamanho_array(numero) == 1){
        nome_por_extenso = unidades[parseInt(numero)];
    }

    /*
    primeiro_digito_array_comecando_direita_para_esquerda = numero[2];
    segundo_digito_array_comecando_direita_para_esquerda = numero[1];
    terceiro_digito_array_comecando_direita_para_esquerda = numero[0];

    nome_por_extenso = centenas[parseInt(terceiro_digito_array_comecando_direita_para_esquerda-1)] 
    + ' e ' +dezenas[parseInt(segundo_digito_array_comecando_direita_para_esquerda-1)]
    + ' e ' +unidades[parseInt(primeiro_digito_array_comecando_direita_para_esquerda)];

    */
    console.log(nome_por_extenso);
}

// Casos verificados // UNIDADES // SE  // DEZENAS // CENTENAS

numero = String(7);
console.log('Valor inserido: ' + numero)
console.log('Tamanho do vetor/string: ' +verifica_tamanho_array(numero));

escreve_por_extenso_numero(numero);
/*
console.log(verifica_numero_nas_dezenas_array(numero) <  2);
console.log(verifica_numero_nas_unidades_array(numero));
console.log(dezenas_onze_ao_dezenove[parseInt(numero)]);

if ( ( verifica_tamanho_array(numero) ) === 1){
    console.log(unidades[parseInt(numero)]);
}
if(verifica_tamanho_array(numero) === 2){
    if (verifica_numero_nas_dezenas_array(numero) < 2){
        posicao = verifica_numero_nas_unidades_array(numero)
        console.log(posicao);
        console.log(dezenas_onze_ao_dezenove[parseInt(posicao)])
        // console.log([parseInt(numero)])
    }
}
*/


