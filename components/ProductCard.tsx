'use client';

import { Product } from '@/lib/types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div class="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-md transition flex flex-col justify-between">
            <div>
                <div class="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img src={product.image} alt={product.name} class="w-full h-full object-cover" />
                    {!product.available && (
                        <span class="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                            Stok Habis
                        </span>
                    )}
                    <span class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2.5 py-0.5 rounded-md">
                        {product.category}
                    </span>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-gray-800 text-base leading-snug">{product.name}</h3>
                    <p class="text-xs text-gray-500 mt-1 line-clamp-2">{product.desc || ''}</p>
                    <div class="text-amber-600 font-extrabold text-base mt-3">
                        Rp {product.price.toLocaleString('id-ID')}
                    </div>
                </div>
            </div>
            <div class="p-4 pt-0">
                <button
                    onClick={() => onAddToCart(product)}
                    disabled={!product.available}
                    class={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${product.available
                            ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-200 shadow-lg'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    + Tambah
                </button>
            </div>
        </div>
    );
}