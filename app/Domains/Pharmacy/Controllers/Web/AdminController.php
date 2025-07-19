<?php

namespace App\Domains\Pharmacy\Controllers\Web;

use App\Core\Controllers\Controller;
use Inertia\Inertia;
class AdminController extends Controller
{
   
    public function ShowDashboardPage()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function ShowInventoryPage()
    {
        return Inertia::render('Admin/Inventory/Overview');
    }

    public function ShowMedicinesPage()
    {
        return Inertia::render('Admin/Inventory/Medicines/Index');
    }
}