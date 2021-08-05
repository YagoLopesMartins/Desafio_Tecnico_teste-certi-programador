
valor_saque = 66321;
tmp = 0;

    if (valor_saque>=1000) {
        tmp = Math.floor(valor_saque/1000);
        console.log(`${tmp} milhares`);
        valor_saque= valor_saque-(tmp*1000)
    }
    if (valor_saque>=100){
        tmp = Math.floor(valor_saque/100)
        console.log(`${tmp} centenas`);
        valor_saque =  valor_saque-(tmp*100)
    }
    if (valor_saque>=10){
        tmp = Math.floor(valor_saque/10)
        console.log(`${tmp} dezenas`);
        valor_saque =  valor_saque-(tmp*10)
    }
    if (valor_saque>=1){
        tmp = Math.floor(valor_saque/1)
        console.log(`${tmp} unidades`);
        valor_saque =  valor_saque-(tmp*1)
    }