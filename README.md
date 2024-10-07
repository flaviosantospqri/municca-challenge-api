## Documentação da API - Desafio Técnico Municca Sign

## Descrição Geral

Esta API foi criada para gerenciar `Usuários` e seus `Documentos` associados, permitindo operações CRUD completas (Criar, Ler, Atualizar e Deletar). A API usa **Prisma** para definir os modelos de dados e simula um banco de dados utilizando SQLite. A relação entre `Usuários` e `Documentos` é de um-para-muitos (1 → N). A autenticação via **JWT** é opcional.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Prisma**
- **SQLite** (Para simular um banco de dados real)
- **JWT** 

## Modelos

### Modelo de Usuário (User)

- `id` (UUID): Identificador único do usuário.
- `name` (String): Nome do usuário.
- `email` (String): Email do usuário.

### Modelo de Documento (Document)

- `id` (UUID): Identificador único do documento.
- `name` (String): Nome do documento.
- `status` (Boolean): Status do documento (verdadeiro/falso).
- `userId` (UUID): Chave estrangeira referenciando o usuário.



## Endpoints

### 1. Autenticação

#### POST `/login`

Este endpoint realiza o login do administrador. Não é necessária a criação de um administrador.

**Exemplo de Requisição:**
Os dados abaixo, são os dados mockados para acesso
```json
{
  "email": "admin@municca.com",
  "password": "admin"
}
```


### 2\. CRUD de Usuários

#### POST `/user`

Cria um novo usuário.

**Exemplo de Payload:**

```json
{
  "name": "Pedro Paulo",
  "email": "teste@teste"
}
```
**Respostas:**

-   `201 Created`: Usuário criado com sucesso.
-   `400 Bad Request`: Erro de validação.



#### GET `/user/:id`

Recupera um usuário pelo ID, incluindo seus documentos associados.

**Parâmetros da Requisição:**

-   `id`: ID do Usuário.

**Respostas:**

-   `200 OK`: Retorna os detalhes do usuário e seus documentos associados.
-   `404 Not Found`: Usuário não encontrado.


#### GET `/users`

Recupera uma lista de todos os usuários.

**Respostas:**

-   `200 OK`: Retorna uma lista de usuários.
-   `204 No Content`: Nenhum usuário encontrado.


#### PATCH `/user/:id`

Atualiza um usuário existente pelo ID.

**Parâmetros da Requisição:**

-   `id`: ID do Usuário.

**Exemplo de Payload:**

```json

{
  "name": "Nome Atualizado",
  "email": "atualizado@example.com"
}
```

**Respostas:**

-   `200 OK`: Usuário atualizado com sucesso.
-   `404 Not Found`: Usuário não encontrado.
-   `400 Bad Request`: Erro de validação.


#### DELETE `/user/:id`

Deleta um usuário pelo ID.

**Parâmetros da Requisição:**

-   `id`: ID do Usuário.

**Respostas:**

-   `200 OK`: Usuário deletado com sucesso.
-   `404 Not Found`: Usuário não encontrado.



### 3\. CRUD de Documentos

#### POST `/document`

Cria um novo documento associado a um usuário.

**Exemplo de Payload:**

```json

{
  "name": "CPF",
  "status": false,
  "userId": "e258aa3c-ad2f-41e2-9d3d-6bf613c0af25"
}
```
**Respostas:**

-   `201 Created`: Documento criado com sucesso.
-   `400 Bad Request`: Erro de validação.



#### GET `/documents`

Recupera uma lista de todos os documentos.

**Respostas:**

-   `200 OK`: Retorna uma lista de documentos.
-   `204 No Content`: Nenhum documento encontrado.


#### PATCH `/document/:id`

Atualiza um documento existente pelo ID.

**Parâmetros da Requisição:**

-   `id`: ID do Documento.

**Exemplo de Payload:**

```json

{
  "name": "Nome Atualizado do Documento",
  "status": true
}
```
**Respostas:**

-   `200 OK`: Documento atualizado com sucesso.
-   `404 Not Found`: Documento não encontrado.
-   `400 Bad Request`: Erro de validação.


#### DELETE `/document/:id`

Deleta um documento pelo ID.

**Parâmetros da Requisição:**

-   `id`: ID do Documento.

**Respostas:**

-   `200 OK`: Documento deletado com sucesso.
-   `404 Not Found`: Documento não encontrado.


Recursos Opcionais
------------------

### Autenticação JWT (Opcional)

A autenticação baseada em JWT pode ser implementada para maior segurança. O endpoint `/login` geraria um token após a autenticação bem-sucedida, que pode ser usado nas requisições subsequentes para proteger as rotas. A protenção nas rotas, não está implementada para fins de teste, mas o middleware está criado, sendo necessário apenas aplicar nas rotas. 


Exemplo de Uso
--------------

### Criação de Usuário

**Requisição:**

```bash


`POST /user
Content-Type: application/json

{
  "name": "Pedro Paulo",
  "email": "teste@teste"
}`

```
**Resposta:**

```json

{
  "id": "unique-user-id",
  "name": "Pedro Paulo",
  "email": "teste@teste"
}
```

### Criação de Documento

**Requisição:**

```bash

POST /document
Content-Type: application/json

{
  "name": "CPF",
  "status": false,
  "userId": "e258aa3c-ad2f-41e2-9d3d-6bf613c0af25"
}
```
**Resposta:**

```json

{
  "id": "unique-document-id",
  "name": "CPF",
  "status": false,
  "userId": "e258aa3c-ad2f-41e2-9d3d-6bf613c0af25"
}
```
