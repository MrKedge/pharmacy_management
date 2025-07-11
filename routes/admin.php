<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


route::prefix('admin')->group(function () {
   route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
   })->name('admin.dashboard');
});
