<?php

namespace App\Domains\Pharmacy\Controllers;

use App\Domains\Pharmacy\Services\ProductService;
use Illuminate\Http\Request;
use App\Core\Controllers\Controller;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index()
    {
        $products = $this->productService->getAllProducts();
        return response()->json($products);
    }

    public function show($id)
    {
        $product = $this->productService->findProductById($id);
        if ($product) {
            return response()->json($product);
        }
        return response()->json(['message' => 'Product not found'], 404);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'brand' => 'nullable|string|max:255',
            'category_id' => 'nullable|exists:categories,id',
            'price' => 'required|numeric|min:0',
            'cost' => 'nullable|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'reorder_level' => 'nullable|integer|min:0',
            'expiry_date' => 'nullable|date',
            'barcode' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ]);

        $product = $this->productService->createProduct($validatedData);
        return response()->json($product, 201);       
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        $product = $this->productService->updateProduct($id, $data);
        if ($product) {
            return response()->json($product);
        }
        return response()->json(['message' => 'Product not found'], 404);
    }

    public function destroy($id)
    {
        if ($this->productService->deleteProduct($id)) {
            return response()->json(['message' => 'Product deleted successfully']);
        }
        return response()->json(['message' => 'Product not found'], 404);
    }
} 