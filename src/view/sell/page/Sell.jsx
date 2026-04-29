import React, { useState, useMemo } from 'react';
import { Search, Trash2, Gift, ChevronLeft, ChevronRight, Utensils, Coffee, ShoppingBag } from 'lucide-react';

const Sells = () => {
  // 1. ຂໍ້ມູນສິນຄ້າ (ຄືເກົ່າ)
  const productsData = [
    { id: 1, name: 'ເຂົ້າຜັດໝູ', price: 25000, category: 'Food', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=200&auto=format&fit=crop' },
    { id: 2, name: 'ຕຳໝາກຫຸ່ງ', price: 20000, category: 'Food', image: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=200&auto=format&fit=crop' },
    { id: 3, name: 'ແກງໜໍ່ໄມ້', price: 30000, category: 'Food', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=200&auto=format&fit=crop' },
    { id: 4, name: 'ລາບໝູ', price: 35000, category: 'Food', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=200&auto=format&fit=crop' },
    { id: 5, name: 'ເປັດປິ້ງ', price: 85000, category: 'Food', image: 'https://images.unsplash.com/photo-1518492104633-c3ed9e75402a?q=80&w=200&auto=format&fit=crop' },
    { id: 6, name: 'ເບຍລາວ (ໃຫຍ່)', price: 18000, category: 'Drink', image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?q=80&w=200&auto=format&fit=crop' },
    { id: 7, name: 'ນ້ຳດື່ມບໍລິສຸດ', price: 5000, category: 'Drink', image: 'https://images.unsplash.com/photo-1523362628742-0c26015eb262?q=80&w=200&auto=format&fit=crop' },
    { id: 8, name: 'ກາເຟເຢັນ', price: 15000, category: 'Drink', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=200&auto=format&fit=crop' },
    { id: 9, name: 'ນ້ຳໝາກໄມ້ປັ່ນ', price: 12000, category: 'Drink', image: 'https://images.unsplash.com/photo-1536816579748-4fcb33e14724?q=80&w=200&auto=format&fit=crop' },
    { id: 10, name: 'ຊາຂຽວມັດຈະ', price: 18000, category: 'Drink', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=200&auto=format&fit=crop' },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return productsData;
    return productsData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-1 h-full bg-slate-50 font-sans text-slate-700 overflow-hidden">
      
      {/* --- ເບື້ອງຊ້າຍ: Product Section --- */}
      <div className="flex flex-col flex-1 p-6 overflow-hidden">
        
        {/* Header: Search & Pagination */}
        <div className="flex justify-between items-center mb-6 gap-4">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="w-5 h-5 text-slate-400" />
            </span>
            <input
              type="text"
              className="w-full py-3 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="ຄົ້ນຫາລາຍການອາຫານ & ເຄື່ອງດື່ມ..."
            />
          </div>

          <div className="flex items-center bg-white rounded-2xl shadow-sm p-1.5 border border-slate-200">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 disabled:opacity-20 transition-colors"><ChevronLeft size={20}/></button>
            <span className="px-4 text-sm font-bold text-slate-600">{currentPage} / {totalPages || 1}</span>
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages || totalPages === 0} className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 disabled:opacity-20 transition-colors"><ChevronRight size={20}/></button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-auto mb-6 flex-1 content-start pr-2 custom-scrollbar">
          {currentItems.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-blue-400 hover:shadow-md cursor-pointer overflow-hidden transition-all active:scale-95 group">
              <div className="h-32 w-full overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-xl shadow-sm">
                   <ShoppingBag size={14} className="text-blue-600" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-slate-800 truncate">{product.name}</p>
                <p className="text-blue-600 font-black text-base mt-1">{product.price.toLocaleString()} ₭</p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Tabs (ລຸ່ມສຸດ) */}
        <div className="flex gap-4 pt-4 border-t border-slate-200 overflow-x-auto pb-2">
          {['All', 'Food', 'Drink'].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`px-10 py-3.5 rounded-2xl font-bold text-sm shadow-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white scale-105 shadow-lg shadow-blue-100' 
                : 'bg-white text-slate-500 hover:bg-blue-50 hover:text-blue-600 border border-slate-100'
              }`}
            >
              {cat === 'Food' && <Utensils size={18} />}
              {cat === 'Drink' && <Coffee size={18} />}
              {cat === 'All' ? 'ທັງໝົດ' : cat === 'Food' ? 'ອາຫານ' : 'ເຄື່ອງດື່ມ'}
            </button>
          ))}
        </div>
      </div>

      {/* --- ເບື້ອງຂວາ: Cart/Checkout --- */}
      <div className="w-80 lg:w-[400px] bg-white border-l border-slate-200 flex flex-col shadow-2xl relative z-10">
        {/* Header Cart */}
        <div className="p-6 border-b bg-blue-600 text-white rounded-bl-[40px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-xl border border-white/30">
                08
              </div>
              <div>
                <h3 className="font-black text-lg tracking-tight">ໂຕະເບີ 08</h3>
                <p className="text-xs text-blue-100 font-medium opacity-80">Order #88291</p>
              </div>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <div className="flex gap-4">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shadow-md shadow-blue-100">1</span>
              <div>
                <p className="text-sm font-bold text-slate-800">ເຂົ້າຜັດໝູ</p>
                <p className="text-[11px] text-slate-400 font-medium">ໝາຍເຫດ: ບໍ່ໃສ່ຜັກບົ່ວ</p>
              </div>
            </div>
            <p className="text-sm font-black text-blue-600">25,000 ₭</p>
          </div>
        </div>

        {/* Footer Payment */}
        <div className="p-6 border-t bg-white space-y-4 rounded-tl-[40px] shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-slate-400 text-xs font-bold">
              <span>ລວມຍ່ອຍ</span>
              <span className="text-slate-600 uppercase">25,000 ₭</span>
            </div>
            <div className="flex justify-between items-center text-blue-600 text-sm font-black">
              <span>ລວມທັງໝົດ</span>
              <span className="text-lg">25,000 ₭</span>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4.5 rounded-2xl flex justify-between items-center px-8 shadow-xl shadow-blue-100 transition-all active:scale-[0.97] group">
            <span className="font-black tracking-widest uppercase text-sm">ຊຳລະເງິນ</span>
            <div className="flex items-center gap-2">
               <span className="h-6 w-[1px] bg-white/30 mr-2"></span>
               <span className="text-xl font-black">25,000 ₭</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sells;