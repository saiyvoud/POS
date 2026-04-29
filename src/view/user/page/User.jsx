import React from 'react';
import { 
  FiFilter, FiUpload, FiPlus, FiMoreHorizontal, 
  FiChevronLeft, FiChevronRight, FiChevronDown 
} from 'react-icons/fi';

const Users = () => {
  const products = [
    { name: 'Cherry Delight', phone: '2096794376',qty: "1", package: "ລາຍເດືອນ",price: '$90.50', address: 'ຮ້ານ ຂາໄກ CC ບ້ານທົ່ງສ້າງນາງ', type: 'Dessert', status: 'Pending', color: 'orange' },
    { name: 'Kiwi', phone: '2096794375',qty: "1", package: "ລາຍປີ",price: '$12.00', address: 'ຮ້ານ ຂາໄກ ຍົກໂປ້ ບ້ານທົ່ງສ້າງນາງ', type: 'Fruits', status: 'Active', color: 'green' },
    { name: 'Mango Magic', phone: '2096794374',qty: "1", package: "ຊື້ຂາດ",price: '$100.50', address: 'ຮ້ານ ເຂົ້າຊອຍ ຫລວງນ້ຳທາ', type: 'Ice Cream', status: 'Inactive', color: 'red' },
    { name: 'Joy Care', phone: '2096794373',qty: "3", package: "ລາຍເດືອນ",price: '$59.99', address: 'ຮ້ານ ອາຫານ ຂອບໃຈເດີ ບ້ານ ທາດດຳ', type: 'Care', status: 'On Sale', color: 'blue' },
    { name: 'Blueberry Bliss', phone: '2096794372',qty: "2", package: "ລາຍເດືອນ",price: '$150.90', address: 'ຮ້ານຟິດຊາ ບ້ານ ຫ້ວຍຫົງ', type: 'Dessert', status: 'Bouncing', color: 'purple' },
    // ສາມາດເພີ່ມຂໍ້ມູນອື່ນໆໄດ້ທີ່ນີ້...
  ];

  const getStatusClass = (color) => {
    const colors = {
      orange: 'bg-orange-100 text-orange-500',
      green: 'bg-green-100 text-green-500',
      red: 'bg-red-100 text-red-500',
      blue: 'bg-blue-100 text-blue-500',
      purple: 'bg-purple-100 text-purple-500',
    };
    return colors[color] || 'bg-gray-100 text-gray-500';
  };

  return (
    <main className="flex-1 p-8 bg-white m-6 rounded-[32px] shadow-sm overflow-hidden">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold text-slate-800">ການຂາຍ</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-500 mr-2">
            ສະແດງ 
            <div className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-md cursor-pointer">
              10 <FiChevronDown />
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
            <FiFilter /> ຟິວເຕີ
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">
            <FiUpload /> ນຳອອກ
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <FiPlus /> ເພີ່ມລູກຄ້າໃຫມ່
          </button>
        </div>
      </header>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-slate-400 text-sm font-medium">
              <th className="pb-4 pl-4 cursor-pointer hover:text-slate-600">ຊື່ແລະນາມສະກຸນ</th>
              <th className="pb-4 cursor-pointer hover:text-slate-600">ເບີໂທຕິດຕໍ່</th>
              <th className="pb-4 cursor-pointer hover:text-slate-600">ແພັກເກັດ</th>
              <th className="pb-4 cursor-pointer hover:text-slate-600">ຈຳນວນ</th>
              <th className="pb-4 cursor-pointer hover:text-slate-600">ສະຖານທີ່ຕັ້ງ </th>
              <th className="pb-4 cursor-pointer hover:text-slate-600"> ລາຄາທັງຫມົດ</th>
              <th className="pb-4 cursor-pointer hover:text-slate-600">ສະຖານະ </th>
              <th className="pb-4 text-center">ດຳເນີນການ </th>
            </tr>
          </thead>
          <tbody className="text-slate-600 text-sm">
            {products.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 pl-4 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                  
                    <span className="font-semibold text-slate-700">{item.name}</span>
                  </div>
                </td>
                <td className="py-4 border-t border-slate-50 text-slate-400">{item.phone}</td>
                <td className="py-4 border-t border-slate-50 font-medium">{item.package}</td>
                    <td className="py-4 border-t border-slate-50 font-medium">{item.qty}</td>
                <td className="py-4 border-t border-slate-50">{item.address}</td>
                <td className="py-4 border-t border-slate-50">{item.price}</td>
                <td className="py-4 border-t border-slate-50">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${getStatusClass(item.color)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 border-t border-slate-50 text-center">
                  <button className="text-slate-300 hover:text-slate-600 text-xl px-2">
                    <FiMoreHorizontal />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <footer className="flex items-center justify-between mt-8 text-sm text-slate-400 px-2">
        <button className="flex items-center gap-1 hover:text-slate-600">
          <FiChevronLeft /> Previous
        </button>
        
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button 
              key={page} 
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors
                ${page === 3 ? 'bg-blue-600 text-white' : 'hover:bg-slate-100'}`}
            >
              0{page}
            </button>
          ))}
          <span>...</span>
          <button className="w-8 h-8 hover:bg-slate-100 rounded-md">10</button>
          <button className="w-8 h-8 hover:bg-slate-100 rounded-md">11</button>
        </div>

        <button className="flex items-center gap-1 hover:text-slate-600">
          Next <FiChevronRight />
        </button>
      </footer>
    </main>
  );
};

export default Users;