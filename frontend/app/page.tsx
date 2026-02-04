'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '@/components/Product/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        // Handling the new response structure { success: true, data: [...] }
        setProducts(response.data.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback mock data
        setProducts([
          { id: 1, name: 'Basic T-Shirt', description: 'A comfortable cotton tee', price: 20, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Blue Jeans', description: 'Classic denim jeans', price: 50, image: 'https://via.placeholder.com/150' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-64 text-xl">Loading products...</div>;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
