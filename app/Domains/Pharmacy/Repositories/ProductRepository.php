<?php

namespace App\Domains\Pharmacy\Repositories;
use App\Domains\Pharmacy\Interfaces\ProductRepositoryInterface;
use App\Domains\Pharmacy\Models\Product;

class ProductRepository implements ProductRepositoryInterface
{
   
    public function getAllProducts()
    {
        return Product::all();
    }

   
    public function findProductById($id)
    {
        return Product::find($id);
    }

    
    public function createProduct(array $data)
    {
        return Product::create($data);
    }

    
    public function updateProduct($id, array $data)
    {
        $product = $this->findProductById($id);
        if ($product) {
            $product->update($data);
            return $product;
        }
        return null;
    }
 
    public function deleteProduct($id)
    {
        $product = $this->findProductById($id);
        if ($product) {
            return $product->delete();
        }
        return null;
    }
}