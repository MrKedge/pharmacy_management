<?php

use Illuminate\Support\Facades\Route;
use App\Domains\Pharmacy\Controllers\Web\AdminController;
use Inertia\Inertia;


Route::prefix('admin')->name('admin.')->controller(AdminController::class)->group(function () {
    Route::get('/dashboard', 'ShowDashboard')->name('dashboard');
    Route::get('/inventory', 'ShowInventory')->name('inventory');
    Route::get('/inventory/medicines', 'ShowMedicines')->name('inventory.medicines');
});
