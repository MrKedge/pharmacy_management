<?php

namespace App\Domains\Auth\Mapper;
use App\Domains\Auth\Models\User;
use App\Domains\Auth\Dtos\UserDto;

class UserMapper
{
    public static function toDto(User $user): UserDto
    {
        return new UserDto(
            id: $user->id,
            first_name: $user->first_name,
            last_name: $user->last_name,
            email: $user->email,
            phone: $user->phone,
            role: $user->role,
            status: $user->status,
            isVerified: (bool) $user->isVerified,
        );
    }

    public static function toDtoCollection($users): array
    {
        return array_map(fn($user) => self::toDto($user), $users->all());
    }
}

