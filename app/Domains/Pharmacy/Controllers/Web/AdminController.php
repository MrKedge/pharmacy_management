<?php

namespace App\Domains\Pharmacy\Controllers\Web;

use App\Core\Controllers\Controller;
use Inertia\Inertia;
class AdminController extends Controller
{
   
    public function ShowDashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function ShowInventory()
    {
        return Inertia::render('Admin/Inventory');
    }

    public function ShowMedicines()
    {
        return Inertia::render('Admin/Medicines');
    }
}