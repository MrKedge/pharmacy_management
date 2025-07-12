<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


route::prefix('admin')->group(function () {
   route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
   })->name('admin.dashboard');
});

route::prefix('admin')->group(function () {
   route::get('/inventory', function () {
        return Inertia::render('Admin/Inventory');
   })->name('admin.inventory');
});

