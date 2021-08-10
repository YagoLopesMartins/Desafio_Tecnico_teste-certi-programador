

function verifica_tamanho_array(vetor){

    tamanho = 0;

    tamanho = vetor.length;

    return tamanho;
}

function testa_numero_se_negativo(numero){
    if(numero < 0){
        return 1;
    }
    else{
        return 0;
    }
}

numero = String(-99897)
str_para_number = Number(numero).toString();    
// console.log(str_para_number);

if(testa_numero_se_negativo(str_para_number) === 1){
    // console.log('negativo');
    novo_vetor = str_para_number.toString();
    // console.log(novo_vetor);
    nova_str_sem_sinal = "";
    
    for (let i = 0; i < novo_vetor.length; i++){        
        if(novo_vetor[i] != "-"){
            nova_str_sem_sinal += novo_vetor[i]
        }
        console.log(novo_vetor[i]);
    }    
console.log(nova_str_sem_sinal);
}    
/*
for(let j = 0 ; j < 10; j++){
    numero2 = String('0'+j+'0');
    // numero2 = String('00'+j);
    console.log('valor informado: '+numero2);
    elimina_zeros_a_direita(numero2);
}
    let j = 0
    numero2 = ""
    console.log(numero2 = String('00'+j))
*/
// console.log(verifica_tamanho_array(numero))
// console.log('valor informado: '+numero)

/*
if(verifica_tamanho_array(numero) > 3 && verifica_tamanho_array(numero) < 6){
    str_aux = "";
    str_aux2 = "";
    contador = 0
   for (let i = numero.length-1; i>=0; i--){        
       if(contador < 3){
           str_aux += numero[i]
       }else{
            str_aux2 += numero[i]
       }
       contador++;
   }

   str_aux = str_aux.split('').reverse().join('');
   str_aux2 = str_aux2.split('').reverse().join('');

   str_para_number = Number(vetor).toString();
    number_para_str = valor1.toString();
   
}else{
    console.log('maior que 5 digitos');
}
*/