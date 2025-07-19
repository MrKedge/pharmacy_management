<?php

use Illuminate\Support\Facades\Route;
use App\Domains\Pharmacy\Controllers\Web\AdminController;
use Inertia\Inertia;


Route::prefix('admin')->name('admin.')->controller(AdminController::class)->group(function () {
    Route::get('/dashboard', 'ShowDashboardPage')->name('dashboard');
    Route::get('/inventory', 'ShowInventoryPage')->name('inventory');
    Route::get('/inventory/medicines', 'ShowMedicinesPage')->name('inventory.medicines');
});
