<?php

namespace App\Domains\Auth\Services;

use App\Domains\Auth\Interfaces\UserRepositoryInterface;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserService
{
    protected UserRepositoryInterface $userRepo;

    public function __construct(UserRepositoryInterface $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    public function getAll()
    {
        return $this->userRepo->all();
    }

    public function findById(int $id)
    {
        return $this->userRepo->find($id);
    }

    public function create(array $data)
    {
        $data['hashedPassword'] = Hash::make($data['hashedPassword']);
        return $this->userRepo->create($data);
    }

    public function update(int $id, array $data)
    {
        if (isset($data['hashedPassword'])) {
            $data['hashedPassword'] = Hash::make($data['hashedPassword']);
        }

        return $this->userRepo->update($id, $data);
    }

    public function delete(int $id)
    {
        return $this->userRepo->delete($id);
    }

    public function verifyPassword(int $id, string $plainPassword): bool
    {
        $user = $this->userRepo->find($id);

        if (!$user || !Hash::check($plainPassword, $user->hashedPassword)) {
            throw ValidationException::withMessages(['password' => 'Invalid password.']);
        }

        return true;
    }
}
