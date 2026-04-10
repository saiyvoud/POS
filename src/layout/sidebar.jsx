import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // ເພີ່ມ 2 ອັນນີ້
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  BarChart3, 
  ChevronLeft, 
  Menu,
  LogOut
} from 'lucide-react';

const SideBarComponents = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation(); // ໃຊ້ແທນ activeIndex ເພື່ອຮູ້ວ່າຢູ່ໜ້າໃດ

  const menus = [
    { name: "ໜ້າຫຼັກ", icon: LayoutDashboard, page: "/" },
    { name: "ຂໍ້ມູນຜູ້ໃຊ້", icon: User, page: "/user" },
    { name: "ລາຍງານ", icon: BarChart3, page: "/report" },
    { name: "ຕັ້ງຄ່າ", icon: Settings, page: "/setting" },
  ];

  return (
    
    <aside 
      className={`bg-white border-r border-gray-200 min-h-screen ${isOpen ? 'w-64' : 'w-20'} 
      duration-300 p-5 pt-8 relative flex flex-col transition-all`}
    >
      {/* ປຸ່ມ Toggle Sidebar */}
      <button 
        className="absolute -right-3 top-9 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft size={14} /> : <Menu size={14} />}
      </button>

      {/* Logo */}
      <div className="flex gap-x-4 items-center mb-10 px-2">
        <div className="bg-blue-600 p-1.5 rounded-lg text-white shrink-0">
          <LayoutDashboard size={22} />
        </div>
        <h1 className={`text-gray-800 font-bold text-xl duration-200 origin-left ${!isOpen && "scale-0 hidden"}`}>
          LaoAdmin
        </h1>
      </div>
      <p className='text-gray-500'>General</p>
      {/* Menu List */}
      <nav className="flex-1">
        <ul>
          {menus.map((menu, index) => {
            const isActive = location.pathname === menu.page; // ກວດ path ປັດຈຸບັນ
            return (
              <li
                key={index}
                onClick={() => navigate(menu.page)} // Navigate ໄປໜ້ານັ້ນ
                className={`
                  flex items-center gap-x-4 p-3 my-2 cursor-pointer rounded-xl transition-all group relative
                  ${isActive
                    ? "bg-blue-50 text-blue-600 shadow-sm" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-blue-500"}
                `}
              >
                <menu.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`font-medium whitespace-nowrap duration-200 ${!isOpen && "opacity-0 hidden"}`}>
                  {menu.name}
                </span>

                {!isOpen && (
                  <span className="absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none whitespace-nowrap">
                    {menu.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-100 pt-4">
        <button className="flex items-center gap-x-4 p-3 w-full text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
          <LogOut size={22} />
          <span className={`font-medium ${!isOpen && "hidden"}`}>ອອກຈາກລະບົບ</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBarComponents;