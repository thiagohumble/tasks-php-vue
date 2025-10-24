# Documentação da API de Tarefas

Esta documentação descreve os endpoints disponíveis na API de tarefas, incluindo a autenticação JWT.

---

## Autenticação JWT

Para acessar as rotas protegidas da API, é necessário obter um JSON Web Token (JWT) através dos endpoints de autenticação. O token deve ser incluído no cabeçalho `Authorization` de todas as requisições protegidas no formato `Bearer <seu_token>`.

### Registrar um Novo Usuário

Cria uma nova conta de usuário.

-   **URL:** `/api/auth/register`
-   **Método:** `POST`
-   **Autenticação:** Nenhuma

#### Parâmetros da Requisição (JSON Body)

| Campo      | Tipo   | Obrigatório | Descrição                               |
|------------|--------|-------------|-----------------------------------------|
| `name`     | string | Sim         | Nome do usuário (entre 2 e 100 caracteres). |
| `email`    | string | Sim         | Endereço de e-mail único do usuário.    |
| `password` | string | Sim         | Senha do usuário (mínimo 6 caracteres). |
| `password_confirmation` | string | Sim | Confirmação da senha. |

#### Resposta de Sucesso (201 Created)

```json
{
    "message": "User successfully registered",
    "user": {
        "name": "Nome do Usuário",
        "email": "usuario@example.com",
        "updated_at": "2025-10-24T10:00:00.000000Z",
        "created_at": "2025-10-24T10:00:00.000000Z",
        "id": 1
    }
}
```

#### Resposta de Erro (400 Bad Request)

```json
{
    "email": [
        "The email has already been taken."
    ]
}
```

### Fazer Login

Autentica um usuário e retorna um JWT.

-   **URL:** `/api/auth/login`
-   **Método:** `POST`
-   **Autenticação:** Nenhuma

#### Parâmetros da Requisição (JSON Body)

| Campo      | Tipo   | Obrigatório | Descrição                               |
|------------|--------|-------------|-----------------------------------------|
| `email`    | string | Sim         | Endereço de e-mail do usuário.          |
| `password` | string | Sim         | Senha do usuário.                       |

#### Resposta de Sucesso (200 OK)

```json
{
    "access_token": "eyJ0eXAiOiJKV1Qi...",
    "token_type": "bearer",
    "expires_in": 3600
}
```

#### Resposta de Erro (401 Unauthorized)

```json
{
    "error": "Unauthorized"
}
```

### Obter Dados do Usuário Autenticado

Retorna os dados do usuário atualmente autenticado.

-   **URL:** `/api/auth/me`
-   **Método:** `POST`
-   **Autenticação:** JWT (Bearer Token)

#### Resposta de Sucesso (200 OK)

```json
{
    "id": 1,
    "name": "Nome do Usuário",
    "email": "usuario@example.com",
    "email_verified_at": null,
    "created_at": "2025-10-24T10:00:00.000000Z",
    "updated_at": "2025-10-24T10:00:00.000000Z"
}
```

#### Resposta de Erro (401 Unauthorized)

```json
{
    "message": "Unauthenticated."
}
```

### Fazer Logout

Invalida o token JWT do usuário, encerrando a sessão.

-   **URL:** `/api/auth/logout`
-   **Método:** `POST`
-   **Autenticação:** JWT (Bearer Token)

#### Resposta de Sucesso (200 OK)

```json
{
    "message": "Successfully logged out"
}
```

### Atualizar Token

Obtém um novo token JWT sem a necessidade de fazer login novamente.

-   **URL:** `/api/auth/refresh`
-   **Método:** `POST`
-   **Autenticação:** JWT (Bearer Token)

#### Resposta de Sucesso (200 OK)

```json
{
    "access_token": "eyJ0eXAiOiJKV1Qi... (novo token)",
    "token_type": "bearer",
    "expires_in": 3600
}
```

---

## Endpoints da API de Tarefas (Protegidos por JWT)

Todos os endpoints abaixo agora exigem um token JWT válido no cabeçalho `Authorization`.

### Listar todas as Tarefas

Retorna uma lista de todas as tarefas cadastradas, ordenadas por data de criação decrescente.

-   **URL:** `/api/tasks`
-   **Método:** `GET`
-   **Autenticação:** JWT (Bearer Token)

### Criar uma Nova Tarefa

Cria uma nova tarefa no sistema.

-   **URL:** `/api/tasks`
-   **Método:** `POST`
-   **Autenticação:** JWT (Bearer Token)

### Atualizar uma Tarefa Existente

Atualiza os detalhes de uma tarefa específica.

-   **URL:** `/api/tasks/{id}`
-   **Método:** `PUT` ou `PATCH`
-   **Autenticação:** JWT (Bearer Token)

### Excluir uma Tarefa

Exclui uma tarefa específica do sistema.

-   **URL:** `/api/tasks/{id}`
-   **Método:** `DELETE`
-   **Autenticação:** JWT (Bearer Token)

---