<?php

use Illuminate\Support\Facades\Route;
use App\Domains\Pharmacy\Controllers\Web\DashboardController;
use App\Domains\Pharmacy\Controllers\Web\InventoryController;
use App\Domains\Pharmacy\Controllers\Web\MedicineController;

Route::prefix('admin')->name('admin.')
    ->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/inventory', [InventoryController::class, 'index'])->name('inventory');

    Route::prefix('inventory/medicines')
        ->name('inventory.medicines.')
        ->controller(MedicineController:: class)
        ->group(function () {
        Route::get('/','index')->name('index');
        Route::get('/create','create')->name('create');
        Route::get('/{medicine}/edit','edit')->name('edit');        
    });
});