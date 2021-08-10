const express = require('express');

const escreve_por_extenso = require('./src/util/escreve_por_extenso');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:num', async (request, response) => {
    valor_passado_pela_url  = request.params.num;
    escreve = await escreve_por_extenso.main(valor_passado_pela_url);
    console.log(escreve);
    response.json({ extenso: `${escreve}`});
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))