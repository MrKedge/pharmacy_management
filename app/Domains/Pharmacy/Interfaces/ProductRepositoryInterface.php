<?php

namespace App\Domains\Pharmacy\Interfaces;

interface ProductRepositoryInterface
{
    public function getAllProducts();
    public function findProductById($id);
    public function createProduct(array $data);  
    public function updateProduct($id, array $data);    
    public function deleteProduct($id);
}