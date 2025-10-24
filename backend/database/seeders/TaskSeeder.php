<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            ['title' => 'Configurar ambiente de desenvolvimento', 'completed' => true],
            ['title' => 'Criar migrations do banco de dados', 'completed' => true],
            ['title' => 'Desenvolver a API de tarefas', 'completed' => false],
        ]);
    }
}