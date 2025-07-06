<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Domains\Auth\Middlewares\CheckSomething;
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');


require __DIR__.'/api.php';

Route::middleware(CheckSomething::class)->group(function () {
    Route::get('/secure-area', function () {
        return "HELLO, you are allowed!";
    })->name('secure.area');
});