<?php

use Illuminate\Support\Facades\Route;
use App\Domains\Auth\Controllers\API\UserController;

Route::prefix('api')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
});


