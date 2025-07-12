<?php

namespace App\Domains\Auth\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
//can be remove to and be place to share location
class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'hashedPassword',
        'isVerified',
        'role',
        'status',
        'phone',
    ];

    protected $hidden = [
        'hashedPassword',
        'remember_token',
    ];

    protected $casts = [
        'isVerified' => 'boolean',
    ];

    // 🔐 Laravel expects 'password', so override getAuthPassword
    public function getAuthPassword()
    {
        return $this->hashedPassword;
    }
}
