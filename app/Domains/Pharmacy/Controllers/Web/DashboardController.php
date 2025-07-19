<?php

namespace App\Domains\Pharmacy\Controllers\Web;

use App\Core\Controllers\Controller;
use Inertia\Inertia;
class DashboardController extends Controller
{   
    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }

}