<?php

namespace App\Console\Commands;

use App\Models\Task;
use App\Jobs\NotifyTaskJob;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class CheckTasksCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:tasks';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checks for scheduled tasks and dispatches notification jobs.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $tasks = Task::where('scheduled_to', '<=', Carbon::now())
                     ->where('is_notified', false)
                     ->get();

        foreach ($tasks as $task) {
            NotifyTaskJob::dispatch($task);
            $this->info("Dispatched notification for task: {$task->title}");
        }

        $this->info('Task check completed.');
    }
}
