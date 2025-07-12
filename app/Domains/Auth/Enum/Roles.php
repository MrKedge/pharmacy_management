<?php

namespace App\Domains\Auth\Enum;
enum Roles: string
{
    case Admin = '1';   
    case User = '2';
    case Super_Admin = '0';

    public function label(): string
    {
        return match ($this) {
            self::Admin => '1',       
            self::User => '2'  ,      
            self::Super_Admin => '0',
        };
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function labels(): array
    {
        return array_map(fn($role) => $role->label(), self::cases());
    }
}