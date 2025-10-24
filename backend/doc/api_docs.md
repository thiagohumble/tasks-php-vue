# Documentação da API de Tarefas

Esta documentação descreve os endpoints disponíveis na API de tarefas.

---

## Listar todas as Tarefas

Retorna uma lista de todas as tarefas cadastradas.

- **URL:** `/api/tasks`
- **Método:** `GET`
- **Autenticação:** Nenhuma (por enquanto)

### Resposta de Sucesso (200 OK)

A resposta será um array de objetos JSON, onde cada objeto representa uma tarefa.

**Exemplo de Resposta (com dados):**

```json
[
    {
        "id": 1,
        "title": "Configurar o ambiente de desenvolvimento",
        "completed": true,
        "created_at": "2025-10-24T02:00:00.000000Z",
        "updated_at": "2025-10-24T02:00:00.000000Z"
    },
    {
        "id": 2,
        "title": "Criar a documentação da API",
        "completed": false,
        "created_at": "2025-10-24T02:05:00.000000Z",
        "updated_at": "2025-10-24T02:05:00.000000Z"
    }
]
```

**Exemplo de Resposta (sem dados):**

```json
[]
```

### Estrutura do Objeto `Task`

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | integer | O ID único da tarefa. |
| `title` | string | O título ou nome da tarefa. |
| `completed` | boolean | Indica se a tarefa foi concluída (`true`) ou não (`false`). |
| `created_at` | timestamp | A data e hora de criação da tarefa. |
| `updated_at` | timestamp | A data e hora da última atualização da tarefa. |

---

## Criar uma Nova Tarefa

Cria uma nova tarefa no sistema.

-   **URL:** `/api/tasks`
-   **Método:** `POST`
-   **Autenticação:** Nenhuma (por enquanto)

### Parâmetros da Requisição (JSON Body)

| Campo       | Tipo    | Obrigatório | Descrição                               |
| ----------- | ------- | ----------- | --------------------------------------- |
| `title`     | string  | Sim         | O título da nova tarefa.                |
| `completed` | boolean | Não         | Indica se a tarefa está concluída. Padrão: `false`. |

### Resposta de Sucesso (201 Created)

Retorna o objeto da tarefa recém-criada.

**Exemplo de Resposta:**

```json
{
    "title": "Minha Nova Tarefa",
    "completed": false,
    "updated_at": "2025-10-24T03:00:00.000000Z",
    "created_at": "2025-10-24T03:00:00.000000Z",
    "id": 3
}
```

---

## Atualizar uma Tarefa Existente

Atualiza os detalhes de uma tarefa específica.

-   **URL:** `/api/tasks/{id}`
-   **Método:** `PUT` ou `PATCH`
-   **Autenticação:** Nenhuma (por enquanto)

### Parâmetros da Requisição (JSON Body)

| Campo       | Tipo    | Obrigatório | Descrição                               |
| ----------- | ------- | ----------- | --------------------------------------- |
| `title`     | string  | Sim         | O novo título da tarefa.                |
| `completed` | boolean | Não         | O novo status de conclusão da tarefa. |

### Resposta de Sucesso (200 OK)

Retorna o objeto da tarefa atualizada.

**Exemplo de Resposta:**

```json
{
    "id": 1,
    "title": "Configurar o ambiente de desenvolvimento (Atualizado)",
    "completed": true,
    "created_at": "2025-10-24T02:00:00.000000Z",
    "updated_at": "2025-10-24T03:10:00.000000Z"
}
```

---

## Excluir uma Tarefa

Exclui uma tarefa específica do sistema.

-   **URL:** `/api/tasks/{id}`
-   **Método:** `DELETE`
-   **Autenticação:** Nenhuma (por enquanto)

### Resposta de Sucesso (204 No Content)

Nenhuma resposta de conteúdo é retornada após a exclusão bem-sucedida.

---
