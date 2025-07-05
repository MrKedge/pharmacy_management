<?php

namespace App\Domains\Auth\Repositories;

use App\Domains\Auth\Models\User;
use App\Domains\Auth\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    public function all()
    {
        return User::all();
    }

    public function find(int $id)
    {
        return User::find($id);
    }

    public function create(array $data)
    {
        return User::create($data);
    }

    public function update(int $id, array $data)
    {
        $user = User::find($id);
        if ($user) {
            $user->update($data);
            return $user;
        }
        return null;
    }

    public function delete(int $id)
    {
        $user = User::find($id);
        if ($user) {
            return $user->delete();
        }
        return false;
    }
}