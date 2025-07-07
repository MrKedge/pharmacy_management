<?php

namespace App\Domains\Pharmacy\Models;

use Illuminate\Database\Eloquent\Model;
use App\Domains\Auth\Models\User;
class Sale extends Model
{
    protected $fillable = ['user_id', 'customer_name', 'total_amount', 'payment_method', 'paid_at'];

    public function items()
    {
        return $this->hasMany(SaleItem::class, 'sale_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
