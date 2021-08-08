const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:num', (request, response) => {
    data  = request.params.num;
    console.log(data);
    response.json({ extenso: `${data} numero por extenso`});
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))