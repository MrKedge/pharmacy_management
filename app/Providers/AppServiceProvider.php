<?php

namespace App\Providers;

use App\Domains\Pharmacy\Repositories\ProductRepository;
use App\Domains\Pharmacy\Interfaces\ProductRepositoryInterface;
use Illuminate\Support\ServiceProvider;
use App\Domains\Auth\Interfaces\UserRepositoryInterface;
use App\Domains\Auth\Repositories\UserRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
