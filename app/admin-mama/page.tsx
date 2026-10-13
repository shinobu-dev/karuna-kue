'use client';

import { useState } from 'react';

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'admin@karuna.co.id' && password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Email atau Password Admin salah!');
        }
    };

    if (!isAuthenticated) {
        return (
            <div class="min-h-screen bg-gray-900 flex items-center justify-center p-4">
                <div class="bg-gray-800 p-6 rounded-3xl border border-gray-700 shadow-2xl w-full max-w-md text-white">
                    <h2 class="text-xl font-bold text-amber-400 text-center mb-4">Masuk Admin Karuna Kue</h2>
                    <form onSubmit={handleLogin} class="space-y-4">
                        <div>
                            <label class="text-xs text-gray-400 block mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                class="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label class="text-xs text-gray-400 block mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                class="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm outline-none"
                                required
                            />
                        </div>
                        <button type="submit" class="w-full bg-amber-500 hover:bg-amber-600 font-bold py-3 rounded-xl">
                            Masuk
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div class="min-h-screen bg-gray-900 text-white p-6">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-2xl font-bold text-amber-400 mb-6">Dashboard Admin Karuna Kue</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-gray-800 p-5 rounded-2xl border border-gray-700">
                        <p class="text-xs text-gray-400">Total Omset Harian</p>
                        <p class="text-2xl font-black text-emerald-400 mt-1">Rp 0</p>
                    </div>
                    <div class="bg-gray-800 p-5 rounded-2xl border border-gray-700">
                        <p class="text-xs text-gray-400">Pesanan Selesai</p>
                        <p class="text-2xl font-black text-amber-400 mt-1">0</p>
                    </div>
                    <div class="bg-gray-800 p-5 rounded-2xl border border-gray-700">
                        <p class="text-xs text-gray-400">Pesanan Menunggu</p>
                        <p class="text-2xl font-black text-amber-200 mt-1">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
}