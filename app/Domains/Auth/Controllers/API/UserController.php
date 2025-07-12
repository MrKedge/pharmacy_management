<?php

namespace App\Domains\Auth\API\Controllers;

use App\Core\Controllers\Controller;
use Illuminate\Http\Request;
use App\Domains\Auth\Repositories\Contracts\UserRepositoryInterface;
use App\Domains\Auth\Services\UserService;

class UserController extends Controller
{
    protected UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        return response()->json($this->userService->getAll());
    }

    public function show($id)
    {
        $user = $this->userService->findById($id);
        return $user
            ? response()->json($user)
            : response()->json(['message' => 'User not found'], 404);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|email|unique:users,email',
            'phone'      => 'nullable|string',
            'role'       => 'required|string',
            'status'     => 'required|string',
            'hashedPassword' => 'required|string|min:6',
        ]);

        $user = $this->userService->create($validated);
        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'first_name' => 'sometimes|string|max:255',
            'last_name'  => 'sometimes|string|max:255',
            'email'      => 'sometimes|email|unique:users,email,' . $id,
            'phone'      => 'nullable|string',
            'role'       => 'sometimes|string',
            'status'     => 'sometimes|string',
            'hashedPassword' => 'sometimes|string|min:6',
        ]);

        $user = $this->userService->update($id, $validated);
        return response()->json($user);
    }
    
    public function destroy($id)
    {
        $this->userService->delete($id);
        return response()->json(['message' => 'User deleted successfully.']);
    }
    
}