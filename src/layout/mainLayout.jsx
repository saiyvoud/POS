import { useState } from 'react';
import SidebarComponents from './sidebar';
import NavbarComponents from './navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = ({children}) => { // ໃຊ້ children ເພື່ອຮັບ Component ຈາກໜ້າຕ່າງໆ
  const [isOpen, setIsOpen] = useState(true);
  const [theme, getTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar: ສົ່ງ state ໄປເພື່ອຄວບຄຸມການປິດເປີດ */}
      <SidebarComponents isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <NavbarComponents />

        <main className={theme ==="light" ? "p-4 md:p-8 overflow-y-auto " : "p-4 md:p-8 overflow-y-auto bg-[#151821]" }>
           {/* ເອົາ children ມາແທນບ່ອນນີ້ */}
           <div className="text-black">
              {children}
           </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;