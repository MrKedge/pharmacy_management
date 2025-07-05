<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Domains\Auth\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');


Route::get('/users', [UserController::class, 'index'])->name('users.index');

