# Resumo do Projeto: tasks-php-vue

Este documento resume os passos iniciais de configuração do projeto.

---pasta vendor é o mesmo que node_modules 

## 1. Criação do Projeto Laravel

- **Comando:** `composer create-project --prefer-dist laravel/laravel .`
- **Ação:** Iniciamos a criação de um novo projeto Laravel.
- **Observação:** O comando falhou inicialmente porque o diretório não estava completamente vazio (continha arquivos do `git`). A solução foi criar o projeto em uma pasta temporária e depois mover os arquivos para o diretório atual, preservando o histórico do `git`.

## 2. Configuração do Banco de Dados

- **Decisão:** Alteramos o banco de dados padrão de `SQLite` para `PostgreSQL`.
- **Ação:**
    1.  Atualizamos o arquivo `.env` para refletir a mudança.
    2.  A `DB_CONNECTION` foi definida como `pgsql`, que é o driver de conexão correto para PostgreSQL no Laravel.
    3.  As variáveis `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME` e `DB_PASSWORD` foram ajustadas para o ambiente de desenvolvimento local.
- **Observação:** Esclarecemos que `pgsql` se refere ao driver de conexão do PHP/Laravel, enquanto o nome do banco de dados (`laravel` ou o padrão `postgres`) é especificado em `DB_DATABASE`.

## Próximos Passos

- Executar o comando `php artisan migrate` para criar as tabelas no banco de dados `laravel`.
