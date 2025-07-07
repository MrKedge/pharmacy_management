<?php

namespace App\Domains\Pharmacy\Models;

use Illuminate\Database\Eloquent\Model;
use App\Domains\Auth\Models\User;
class InventoryLog extends Model
{
    public $timestamps = false;
    protected $fillable = ['product_id', 'user_id', 'type', 'quantity', 'reason', 'created_at'];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
