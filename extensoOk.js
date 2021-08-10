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
    if(parseInt(numero) === 1000 || parseInt(numero) === -1000){
        nome_por_extenso = "mil";
        return nome_por_extenso;
    }

    if (primeiro_digito_array_comecando_direita_para_esquerda == "0" &&
        segundo_digito_array_comecando_direita_para_esquerda == "0")
    {
         nome_por_extenso = "";
     }

    terceiro_digito_array_comecando_direita_para_esquerda = numero[0];
    
    nome_por_extenso = centenas[parseInt(terceiro_digito_array_comecando_direita_para_esquerda-1)] 
    + nome_por_extenso;

    return nome_por_extenso;
}
    
numero = String(1011);
// console.log(verifica_tamanho_array(numero))
/*
for (let i = 0; i< numero.length; i++){
 console.log(numero[i])
}
*/

function testa_numero_se_negativo(numero){
    if(numero < 0){
        return 1;
    }
    else{
        return 0;
    }
}

function escreve_por_extenso_numero_final(numero){

    resposta = "";

    if(verifica_tamanho_array(numero) > 3 && verifica_tamanho_array(numero) < 6){

        str_aux_bloco_a_esquerda_cdu_inverso = "";
        str_aux2_bloco_a_esquerda_du_inverso = "";

        valor_por_extenso_cdu = "";
        valor_por_extenso_du = "";

        contador = 0

       for (let i = numero.length-1; i>=0; i--){        
           if(contador < 3){
            str_aux_bloco_a_esquerda_cdu_inverso += numero[i]
           }else{
            str_aux2_bloco_a_esquerda_du_inverso += numero[i]
           }
           contador++;
       }
        str_aux_bloco_a_esquerda_cdu = str_aux_bloco_a_esquerda_cdu_inverso.split('').reverse().join('');
        str_aux2_bloco_a_esquerda_du = str_aux2_bloco_a_esquerda_du_inverso.split('').reverse().join('');

            str_para_number_cdu = Number(str_aux_bloco_a_esquerda_cdu).toString();
            number_para_str_cdu = str_para_number_cdu.toString();

            str_para_number_du = Number(str_aux2_bloco_a_esquerda_du).toString();
            number_para_str_du = str_para_number_du.toString();

        //console.log(str_para_number_cdu)
        //console.log(number_para_str_cdu)

        if(number_para_str_cdu === "0"){
            valor_por_extenso_du = escreve_por_extenso_numero(number_para_str_du);
            // console.log();
            resposta = valor_por_extenso_du +' mil ';
            return resposta;
        }
        else if(number_para_str_du === "1"){

            if(number_para_str_cdu < 100){
                console.log('cdu menor que 100');
                valor_por_extenso_cdu = escreve_por_extenso_numero(number_para_str_cdu);
                resposta = "mil e "+valor_por_extenso_cdu;
                return resposta;
            }else{
                console.log('entrei aqui 2');
                valor_por_extenso_cdu = escreve_por_extenso_numero(number_para_str_cdu);
                resposta = "mil "+valor_por_extenso_cdu;
                return resposta;
            }
        }
        else if(
            number_para_str_cdu === "100" 
        || number_para_str_cdu === "200"
        || number_para_str_cdu === "300"
        || number_para_str_cdu === "400"
        || number_para_str_cdu === "500"
        || number_para_str_cdu === "600"
        || number_para_str_cdu === "700"
        || number_para_str_cdu === "800"
        || number_para_str_cdu === "900"
        ){
            valor_por_extenso_cdu = escreve_por_extenso_numero(number_para_str_cdu);
            valor_por_extenso_du = escreve_por_extenso_numero(number_para_str_du);
            // console.log(valor_por_extenso_du +' mil e '+valor_por_extenso_cdu);
            resposta = valor_por_extenso_du +' mil e '+valor_por_extenso_cdu;
            return resposta;
        }
        else if (number_para_str_cdu < 100){
            valor_por_extenso_cdu = escreve_por_extenso_numero(number_para_str_cdu);
            valor_por_extenso_du = escreve_por_extenso_numero(number_para_str_du);

            //console.log(valor_por_extenso_du +' mil '+valor_por_extenso_cdu);
            resposta = valor_por_extenso_du +' mil e '+valor_por_extenso_cdu;
            return resposta;
        }
        else{
            valor_por_extenso_cdu = escreve_por_extenso_numero(number_para_str_cdu);
            valor_por_extenso_du = escreve_por_extenso_numero(number_para_str_du);

            //console.log(valor_por_extenso_du +' mil '+valor_por_extenso_cdu);
            resposta = valor_por_extenso_du +' mil '+valor_por_extenso_cdu;
            return resposta;
        }
    }   
}

if (parseInt(numero) <= 99999 && parseInt(numero) >= -99999){
  //  console.log('[ '+numero+' ] numero informado no intervalo ( -99999 e 99999 )');

        str_para_number = Number(numero).toString();
    
        if(testa_numero_se_negativo(str_para_number) === 1){

            if(verifica_tamanho_array(str_para_number) > 3){
                novo_vetor = str_para_number.toString();
                nova_str_sem_sinal = "";
                for (let i = 0; i < novo_vetor.length; i++){        
                    if(novo_vetor[i] != "-"){
                     nova_str_sem_sinal += novo_vetor[i]
                    }
                }
                escreve = 'menos '+escreve_por_extenso_numero_final(nova_str_sem_sinal);
                // console.log('menos '+escreve);
                console.log(escreve);
            }else{
                escreve = 'menos '+escreve_por_extenso_numero(nova_str_sem_sinal);
                console.log(escreve);
            }
        }
        else{
            if(verifica_tamanho_array(numero) >  3){
                escreve = escreve_por_extenso_numero_final(numero);
                console.log(escreve);
            }else{
                escreve = escreve_por_extenso_numero(numero);
                console.log(escreve);
            }
            
        }
}
else{
    console.log('numero informado fora do intervalo ( -99999 e 99999 )');
}
// valor_por_extenso = escreve_por_extenso_numero_entre_0_a_19(numero);
// console.log(valor_por_extenso);

/*
    for(let i = 0; i< 20; i++ ){
        numero = String(i);
        valor_por_extenso = escreve_por_extenso_numero_entre_0_a_19(numero);
        console.log(valor_por_extenso);
    }
    for(let i = 20; i < 100; i++ ){
        numero = String(i);
        valor_por_extenso = escreve_por_extenso_numero_entre_20_a_99(numero);
        console.log(valor_por_extenso);
    }
  
    for(let i = 100; i < 1000; i++ ){
        numero = String(i);
        valor_por_extenso = escreve_por_extenso_numero_entre_100_a_999(numero);
        console.log(valor_por_extenso);
    }
*/