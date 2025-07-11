<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Domains\Auth\Middlewares\CheckSomething;



require __DIR__.'/admin.php';
require __DIR__.'/client.php';

// Route::middleware(CheckSomething::class)->group(function () {
//     Route::get('/secure-area', function () {
//         return "HELLO, you are allowed!";
//     })->name('secure.area');
// });