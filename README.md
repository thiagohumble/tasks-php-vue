# Projeto: tasks-php-vue

Este projeto demonstra uma aplicação de gerenciamento de tarefas com backend em Laravel (PHP) e frontend em Vue.js.

<img width="703" height="395" alt="image" src="https://github.com/user-attachments/assets/c73c4ebe-a309-401b-b4f1-0f1618cb7a36" />

### 1. Registro de Usuário

Para criar uma nova conta de usuário:

1.  No frontend, clique no botão "Register" (se estiver na tela de Login).
2.  Preencha os campos "Name", "Email", "Password" e "Confirm Password".
3.  Clique no botão "Register".

Após o registro bem-sucedido, você será redirecionado para a tela de Login.

### 2. Login de Usuário

Para acessar o sistema:

1.  Na tela de Login, insira seu "Email" e "Password".
2.  Clique no botão "Login".

Após o login bem-sucedido, você terá acesso à lista de tarefas e poderá gerenciá-las.

### 3. Logout

Para sair da sua conta:

1.  Após o login, um botão "Logout" estará visível no canto superior direito.
2.  Clique no botão "Logout" para encerrar sua sessão.








## Pré-requisitos

Presume-se que você já tenha PHP (versão 8.2 ou superior), Composer, Node.js (versão 18 ou superior) e npm/yarn configurados em seu ambiente de desenvolvimento. Além disso, é necessário ter um servidor PostgreSQL em execução e acessível.

## Autenticação (Login/Registro)

O projeto utiliza autenticação JWT (JSON Web Tokens) para proteger as rotas da API. Você precisará registrar um usuário e fazer login para acessar as funcionalidades de gerenciamento de tarefas.

## Estrutura do Projeto

```
/home/thumble/projetos/tasks-php-vue/
├───.gitignore
├───.git/...
├───backend/
│   ├───.editorconfig
│   ├───.env.example
│   ├───.gitattributes
│   ├───.gitignore
│   ├───artisan
│   ├───composer.json
│   ├───composer.lock
│   ├───package.json
│   ├───phpunit.xml
│   ├───README.md
│   ├───vite.config.js
│   ├───app/
│   │   ├───Http/
│   │   │   └───Controllers/
│   │   │       ├───Controller.php
│   │   │       └───TaskController.php
│   │   ├───Models/
│   │   │   ├───Task.php
│   │   │   └───User.php
│   │   ├───Console/
│   │   │   └───Commands/
│   │   │       └───CheckTasksCommand.php
│   │   ├───Jobs/
│   │   │   └───NotifyTaskJob.php
│   │   └───Providers/
│   │       └───AppServiceProvider.php
│   ├───bootstrap/
│   │   ├───app.php
│   │   ├───providers.php
│   │   └───cache/
│   │       └───.gitignore
│   ├───config/
│   │   ├───app.php
│   │   ├───auth.php
│   │   ├───cache.php
│   │   ├───database.php
│   │   ├───filesystems.php
│   │   ├───logging.php
│   │   ├───mail.php
│   │   ├───queue.php
│   │   ├───sanctum.php
│   │   ├───services.php
│   │   └───session.php
│   ├───database/
│   │   ├───.gitignore
│   │   ├───factories/
│   │   │   ├───TaskFactory.php
│   │   │   └───UserFactory.php
│   │   ├───migrations/
│   │   │   ├───0001_01_01_000000_create_users_table.php
│   │   │   ├───0001_01_01_000001_create_cache_table.php
│   │   │   ├───0001_01_01_000002_create_jobs_table.php
│   │   │   ├───2025_10_24_013500_create_tasks_table.php
│   │   │   └───2025_10_24_014352_create_personal_access_tokens_table.php
│   │   └───seeders/
│   │       ├───DatabaseSeeder.php
│   │       └───TaskSeeder.php
│   ├───doc/
│   │   ├───api_docs.md
│   │   └───resumo.md
│   ├───public/
│   │   ├───.htaccess
│   │   ├───favicon.ico
│   │   ├───index.php
│   │   └───robots.txt
│   ├───resources/
│   │   ├───css/
│   │   │   └───app.css
│   │   ├───js/
│   │   │   ├───app.js
│   │   │   └───bootstrap.js
│   │   └───views/
│   │       └───welcome.blade.php
│   ├───routes/
│   │   ├───api.php
│   │   ├───console.php
│   │   └───web.php
│   ├───storage/
│   │   ├───app/
│   │   │   ├───.gitignore
│   │   │   ├───private/...
│   │   │   └───public/...
│   │   ├───framework/
│   │   │   ├───.gitignore
│   │   │   ├───cache/
│   │   │   │   ├───.gitignore
│   │   │   │   └───data/...
│   │   │   ├───sessions/
│   │   │   │   └───.gitignore
│   │   │   ├───testing/
│   │   │   │   └───.gitignore
│   │   │   └───views/
│   │   │       └───.gitignore
│   │   └───logs/
│   │       └───.gitignore
│   ├───tests/
│   │   ├───TestCase.php
│   │   ├───Feature/
│   │   │   └───ExampleTest.php
│   │   └───Unit/
│   │       └───ExampleTest.php
│   └───vendor/
│       ├───bin/...
│       ├───brick/...
│       ├───carbonphp/...
│       ├───composer/...
│       ├───dflydev/...
│       ├───doctrine/...
│       ├───dragonmantank/...
│       ├───egulias/...
│       ├───fakerphp/...
│       ├───filp/...
│       ├───fruitcake/...
│       ├───graham-campbell/...
│       ├───guzzlehttp/...
│       ├───hamcrest/...
│       ├───laravel/...
│       ├───league/...
│       ├───mockery/...
│       ├───monolog/...
│       ├───myclabs/...
│       ├───nesbot/...
│       ├───nette/...
│       ├───nikic/...
│       ├───nunomaduro/...
│       ├───phar-io/...
│       ├───phpoption/...
│       ├───phpunit/...
│       ├───psr/...
│       ├───psy/...
│       ├───ralouphie/...
│       ├───ramsey/...
│       ├───sebastian/...
│       ├───staabm/...
│       ├───symfony/...
│       ├───theseer/...
│       ├───tijsverkoyen/...
│       ├───vlucas/...
│       ├───voku/...
│       └───webmozart/...
├───frontend/
│   ├───.gitignore
│   ├───index.html
│   ├───package-lock.json
│   ├───package.json
│   ├───postcss.config.js
│   ├───README.md
│   ├───tailwind.config.js
│   ├───vite.config.js
│   ├───.vscode/
│   ├───dist/...
│   ├───node_modules/...
│   ├───public/
│   │   └───vite.svg
│   └───src/
│       ├───App.vue
│       ├───main.js
│       ├───style.css
│       ├───assets/
│       │   └───vue.svg
│       └───components/
│           ├───TaskForm.vue
│           └───TaskList.vue
└───imagemi/
```

## Configuração do Backend (Laravel)

1.  **Navegue até o diretório do backend:**
    ```bash
    cd backend
    ```

2.  **Instale as dependências do Composer:**
    ```bash
    composer install
    ```

3.  **Configure o arquivo de ambiente (`.env`):**
    *   Copie o arquivo de exemplo:
        ```bash
        cp .env.example .env
        ```
    *   Abra o arquivo `.env` e configure as credenciais do seu banco de dados PostgreSQL. Certifique-se de que `DB_CONNECTION` esteja definido como `pgsql` e preencha `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME` e `DB_PASSWORD` com suas informações. Exemplo:
        ```
        DB_CONNECTION=pgsql
        DB_HOST=127.0.0.1
        DB_PORT=5432
        DB_DATABASE=laravel
        DB_USERNAME=postgres
        DB_PASSWORD=postgres
        ```

4.  **Gere a chave da aplicação:**
    ```bash
    php artisan key:generate
    ```

5.  **Execute as Migrações e Seeders:**
    *   **Migrações:** Criam as tabelas no banco de dados.
    *   **Seeders:** Populam o banco de dados com dados de teste.
        *   **O que são Seeders?** Seeders (ou semeadores) são classes no Laravel usadas para popular o banco de dados com dados de teste ou dados iniciais. Eles são ferramentas de desenvolvimento, executadas via linha de comando, e não fazem parte da interface do usuário.
        *   **O que é Faker?** Faker é uma biblioteca PHP que gera dados falsos realistas (nomes, endereços, textos, datas, etc.). É amplamente utilizada em seeders para criar dados de teste que se assemelham a dados reais.
    *   Para garantir que todas as tabelas sejam criadas corretamente e populadas com dados de teste (incluindo 10 tarefas e 10 usuários aleatórios), execute o seguinte comando:
        ```bash
        php artisan migrate:fresh --seed
        ```
        Este comando irá:
        1.  Remover todas as tabelas existentes no banco de dados.
        2.  Executar todas as migrações novamente.
        3.  Rodar todos os seeders configurados, populando as tabelas com dados de teste.

6.  **Execute o comando de verificação de tarefas (opcional):**
    *   Este comando busca tarefas agendadas e despacha jobs de notificação.
    ```bash
    php artisan check:tasks
    ```

7.  **Inicie o servidor de desenvolvimento Laravel:**
    ```bash
    php artisan serve
    ```
    O backend estará disponível em `http://127.0.0.1:8000` (ou outra porta, se especificado).

## Configuração do Frontend (Vue.js)

1.  **Navegue até o diretório do frontend:**
    ```bash
    cd ../frontend
    ```

2.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    # ou yarn install
    ```

3.  **Inicie o servidor de desenvolvimento do frontend:**
    ```bash
    npm run dev
    # ou yarn dev
    ```
    O frontend estará disponível em `http://localhost:5173` (ou outra porta, se especificado).


## Comandos Úteis

*   **Backend (no diretório `backend/`):**
    *   `composer install`: Instala as dependências PHP.
    *   `php artisan key:generate`: Gera a chave da aplicação.
    *   `php artisan migrate`: Executa as migrações do banco de dados.
    *   `php artisan migrate:fresh --seed`: Reseta o banco de dados e executa as migrações e seeders.
    *   `php artisan db:seed`: Executa apenas os seeders.
    *   `php artisan check:tasks`: Executa o comando personalizado para verificar tarefas.
    *   `php artisan serve`: Inicia o servidor de desenvolvimento Laravel.

*   **Frontend (no diretório `frontend/`):**
    *   `npm install` ou `yarn install`: Instala as dependências Node.js.
    *   `npm run dev` ou `yarn dev`: Inicia o servidor de desenvolvimento do Vue.js.
    *   `npm run build` ou `yarn build`: Compila o frontend para produção.
