<?php

namespace App\Domains\Auth\Dtos;

class UserDto
{    
    public function __construct(
        public readonly int $id,
        public readonly string $first_name,
        public readonly string $last_name,
        public readonly string $email,
        public readonly string $phone,
        public readonly string $role,
        public readonly string $status,
        public readonly bool $isVerified,
    ) {}

}