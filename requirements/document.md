# Criar document
⛔️✅
> ## Caso de sucesso:
1. ⛔️ Recebe uma requisição do tipo **POST** na rota **/api/documents**
1. ⛔️ Valida se a requisição foi feita por um admin
1. ⛔️ Valida dados obrigatórios **analizar**
1. ⛔️ Cria uma enquete com os dados fornecidos
1. ⛔️ Retorna 201

> ## Exceções:
1. ⛔️ Retorna erro 404 se a API não existir
1. ⛔️ Retorna erro 403 se o usuário não for admin
1. ⛔️ Retorna erro 400 se os dados obrigatórios **analizar** não forem fornecidos pelo client
1. ⛔️ Retorna erro 500 se der erro ao tentar criar a enquete