<?php

namespace App\Domains\Auth\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
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
}
