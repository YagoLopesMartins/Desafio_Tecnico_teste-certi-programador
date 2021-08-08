### PROBLEMA A SER RESOLVIDO ###

  - > Na linguagem de sua preferência, crie um servidor HTTP que, para cada requisição GET, retorne um JSON cuja chave extenso seja a versão por extenso do número inteiro enviado no path. Os números podem estar no intervalo [-99999, 99999].

### DICAS ###

  - Não esqueça dos "e"s separando milhares, centenas e dezenas (vide exemplo): "noventa e quatro mil e quinhentos e oitenta e sete". Esse não é o padrão da norma culta da língua portuguesa, e isso é intencional.
É esperado que você implemente o algoritmo de tradução.

### BÔNUS ###

  - > Bônus: Crie um ambiente Docker para que possamos rodar seu servidor sem instalar dependências locais.
  - > Outras coisas em que prestamos atenção no review: edge cases e tratamento de erros, testes unitários, estruturação e qualidade do código, uso do git.

### EXEMPLOS ###

 - λ curl http://localhost:3000/1
    { "extenso": "um" }
 - λ curl http://localhost:3000/-1042
    { "extenso": "menos mil e quarenta e dois" }
 - λ curl http://localhost:3000/94587
    { "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" 

### TECNOLOGIAS ###

 - nodejs versão XXX
 - express versão XXX

### COMO UTILIZAR ###
