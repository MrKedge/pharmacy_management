<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Domains\Auth\Models\User;
class Notification extends Model
{
    public $timestamps = false;
    protected $fillable = ['user_id', 'type', 'title', 'message', 'read_at', 'created_at'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
