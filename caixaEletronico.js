
valor_saque = 321;
tmp = 0;

    if (valor_saque>=100) {
        tmp = Math.floor(valor_saque/100);
        console.log(`${tmp} cedula de 100`);
        valor_saque= valor_saque-(tmp*100)
    }
    if (valor_saque>=50){
        tmp = Math.floor(valor_saque/50)
        console.log(`${tmp} cedula de 50`);
        valor_saque =  valor_saque-(tmp*50)
    }
    if (valor_saque>=20){
        tmp = Math.floor(valor_saque/20)
        console.log(`${tmp} cedula de 20`);
        valor_saque =  valor_saque-(tmp*20)
    }
    if (valor_saque>=10){
        tmp = Math.floor(valor_saque/10)
        console.log(`${tmp} cedula de 10`);
        valor_saque =  valor_saque-(tmp*10)
    }
    if (valor_saque>=5) {
        tmp = Math.floor(valor_saque/5)
        console.log(`${tmp} cedula de 5`);
        valor_saque =  valor_saque-(tmp*5)
    }
    if (valor_saque>=2){
        tmp = Math.floor(valor_saque/2)
        console.log(`${tmp} cedula de 2`);
        valor_saque =  valor_saque-(tmp*2)
    }
    if (valor_saque>=1){
        tmp = Math.floor(valor_saque/1)
        console.log(`${tmp} cedula de 1`);
        valor_saque =  valor_saque-(tmp*1)
    }