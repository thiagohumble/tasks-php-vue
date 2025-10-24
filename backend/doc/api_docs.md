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
