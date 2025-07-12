<?php

namespace App\Domains\Pharmacy\Mapper;
use App\Domains\Pharmacy\Dtos\ProductDto;
class ProductMapper
{
    public static function toDto(array $data): ProductDto
    {
        return new ProductDto(
            id: $data['id'],
            name: $data['name'],
            description: $data['description'],
            price: $data['price'],
            stock: $data['stock'],
            category: $data['category'],
            status: $data['status']
        );
    }

    public static function toArray(ProductDto $dto): array
    {
        return [
            'id' => $dto->id,
            'name' => $dto->name,
            'description' => $dto->description,
            'price' => $dto->price,
            'stock' => $dto->stock,
            'category' => $dto->category,
            'status' => $dto->status,
        ];
    }
}