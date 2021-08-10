unidades_zero_a_dezenove = 
["zero","um","dois","três","quatro","cinco","seis","sete", "oito", "nove", "dez", "onze", 
"doze", "treze", "quatorze", "quinze", "dezesseis","dezessete", "dezoito", "dezenove"]

dezenas = 
["dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta", "noventa"]

centenas = ["cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos",
"setecentos", "oitocentos","novecentos"]

function verifica_tamanho_array(vetor){

    tamanho = 0;

    tamanho = vetor.length;

    return tamanho;
}

function verifica_numero_nas_unidades_array(vetor){

    numero = 0;

    numero = vetor[0];
    return numero;
}
function verifica_numero_nas_dezenas_array(vetor){
    numero = vetor[1];
    return numero;
}
function verifica_numero_nas_dezenas_array_quando_vetor_tam2(vetor){
    numero = vetor[0];
    return numero;
}

function escreve_por_extenso_numero(numero){

    nome_por_extenso = "";

    if(parseInt(numero) < 20){
        nome_por_extenso = unidades_zero_a_dezenove[parseInt(numero)];
        return nome_por_extenso;
    }
    if ( (parseInt(numero) >19) && (parseInt(numero) < 100) ){
        segundo_digito_array_comecando_direita_para_esquerda = numero[0]; 
        primeiro_digito_array_comecando_direita_para_esquerda = numero[1];

        if (primeiro_digito_array_comecando_direita_para_esquerda != "0"){
            nome_por_extenso = 
            " e " +unidades_zero_a_dezenove[parseInt(primeiro_digito_array_comecando_direita_para_esquerda)]
        }

        nome_por_extenso = 
        dezenas[parseInt(segundo_digito_array_comecando_direita_para_esquerda-1)] + nome_por_extenso;

        return nome_por_extenso;
    }
    
    primeiro_digito_array_comecando_direita_para_esquerda = numero[2];
    segundo_digito_array_comecando_direita_para_esquerda = numero[1];

    if ( (segundo_digito_array_comecando_direita_para_esquerda+primeiro_digito_array_comecando_direita_para_esquerda) < 20){
        nome_por_extenso = " e "+unidades_zero_a_dezenove
        [parseInt(segundo_digito_array_comecando_direita_para_esquerda+primeiro_digito_array_comecando_direita_para_esquerda)];
    }

    if (segundo_digito_array_comecando_direita_para_esquerda > 1){
        if(primeiro_digito_array_comecando_direita_para_esquerda != "0"){
            nome_por_extenso = " e "+unidades_zero_a_dezenove[parseInt(primeiro_digito_array_comecando_direita_para_esquerda)];    
        }
        nome_por_extenso = " e "+dezenas[parseInt(segundo_digito_array_comecando_direita_para_esquerda -1)] + nome_por_extenso;
    }

    if (parseInt(numero) === 100){
        nome_por_extenso = "cem";
        return nome_por_extenso;
    }

    if (primeiro_digito_array_comecando_direita_para_esquerda == "0" &&
     segundo_digito_array_comecando_direita_para_esquerda == "0"){
         nome_por_extenso = "";
     }

    terceiro_digito_array_comecando_direita_para_esquerda = numero[0];
    
    nome_por_extenso = centenas[parseInt(terceiro_digito_array_comecando_direita_para_esquerda-1)] 
    + nome_por_extenso;

    return nome_por_extenso;
}

/*
for(let i = 0; i< 20; i++ ){
    numero = String(i);
    valor_por_extenso = escreve_por_extenso_numero(numero);
    console.log(valor_por_extenso);
}
for(let i = 20; i < 100; i++ ){
    numero = String(i);
    valor_por_extenso = escreve_por_extenso_numero(numero);
    console.log(valor_por_extenso);
}
*/
for(let i = 0; i < 1000; i++ ){
    numero = String(i);
    valor_por_extenso = escreve_por_extenso_numero(numero);
    console.log(valor_por_extenso);
}

// console.log('Valor inserido: ' + numero)
// console.log('Tamanho do vetor/string: ' +verifica_tamanho_array(numero));

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


