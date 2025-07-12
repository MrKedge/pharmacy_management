<?php

namespace App\Domains\Pharmacy\Services;

use App\Domains\Pharmacy\Interfaces\ProductRepositoryInterface;

class ProductService{
    protected $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getAllProducts()
    {
        
        return $this->productRepository->getAllProducts();
    }

    public function findProductById($id)
    {
        return $this->productRepository->findProductById($id);
    }

    public function createProduct(array $data)
    {
        return $this->productRepository->createProduct($data);
    }

    public function updateProduct($id, array $data)
    {
        return $this->productRepository->updateProduct($id, $data);
    }

    public function deleteProduct($id)
    {
        return $this->productRepository->deleteProduct($id);
    }
}