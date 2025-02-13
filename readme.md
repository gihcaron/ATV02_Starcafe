# StarCafé API

Bem-vindo ao projeto da API REST para a StarCafé, uma cafeteria famosa pela variedade de cafés e lanches. Esta API permite que clientes façam pedidos e que a administração gerencie o estoque de produtos.

## Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
## Endpoints

### 1️⃣ GET /menu
Retorna o cardápio da cafeteria.

### 2️⃣ POST /order
Permite que um cliente faça um pedido.

### 3️⃣ GET /order/:id
Consulta o status de um pedido.

### 4️⃣ DELETE /order/:id
Cancela um pedido (caso ainda não tenha sido preparado).



## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/gihcaron/ATV02_Starcafe.git
    ```
2. Instale as dependências:
    ```bash
    cd starcafe-api
    npm install
    ```
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o servidor:
    ```bash
    npm run dev
    ```

## Licença
Este projeto está licenciado sob a MIT License.
