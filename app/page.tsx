'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product, CartItem } from '@/lib/types';

const INITIAL_PRODUCTS: Product[] = [
  { id: '1', name: 'Bolu Gulung Pandan Keju', price: 65000, category: 'Bolu & Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop', available: true, desc: 'Bolu lembut aroma pandan asli' },
  { id: '2', name: 'Nastar Wisman Premium 500g', price: 95000, category: 'Kue Kering', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop', available: true, desc: 'Nastar lumer dengan mentega Wijsman' },
  { id: '3', name: 'Cromboloni Red Velvet', price: 28000, category: 'Pastry', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop', available: false, desc: 'Pastry renyah krim red velvet' },
];

export default function Home() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = ['All', 'Bolu & Cake', 'Kue Kering', 'Pastry', 'Dessert Box'];

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1, note: '' }];
    });

    setToastMessage(`"${product.name}" ditambahkan ke keranjang!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const filteredProducts = products.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <div class="min-h-screen bg-amber-50/30 text-gray-800 pb-20">
      {/* Header Navbar */}
      <header class="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-md">
              🧁
            </div>
            <div>
              <h1 class="text-xl font-extrabold text-amber-900 leading-none">Karuna Kue</h1>
              <p class="text-xs text-amber-600 font-medium">Lezat & Segar Setiap Hari</p>
            </div>
          </div>
          <div class="relative p-2.5 bg-amber-100 text-amber-900 rounded-xl font-bold text-sm">
            🛒 Keranjang: {cart.reduce((sum, item) => sum + item.qty, 0)}
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section class="max-w-6xl mx-auto px-4 mt-4">
        <div class="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-3xl p-6 shadow-xl">
          <h2 class="text-2xl font-black">Nikmati Kelezatan Kue Spesial Karuna</h2>
          <p class="text-xs text-amber-100 mt-1">⚡ Estimasi Pengerjaan & Pengiriman: 1 - 2 Hari Kerja</p>
        </div>
      </section>

      {/* Filter Kategori */}
      <section class="max-w-6xl mx-auto px-4 mt-6 flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            class={`px-4 py-2 rounded-full border text-xs font-medium whitespace-nowrap transition ${selectedCategory === cat
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white text-gray-700 border-gray-200'
              }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <main class="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-2.5 rounded-full shadow-2xl z-50">
          ✅ {toastMessage}
        </div>
      )}
    </div>
  );
}