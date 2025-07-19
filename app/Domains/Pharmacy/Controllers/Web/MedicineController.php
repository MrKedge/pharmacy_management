<?php

namespace App\Domains\Pharmacy\Controllers\Web;

use App\Core\Controllers\Controller;
use Inertia\Inertia;
class MedicineController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Inventory/Medicines/Index');
    }

    public function create()
    {
        return Inertia::render('Admin/Inventory/Medicines/Create');
    }
}