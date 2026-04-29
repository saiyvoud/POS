import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Settings,
  BarChart3,
  ChevronDown,
  LogOut,
  FileText,
  UserKey,
  Package,
  Footprints,
  Bell,
  ChartNoAxesCombined
} from "lucide-react";

const SideBarComponents = ({ isOpen }) => { // ເອົາ setIsOpen ອອກຖ້າບໍ່ໄດ້ໃຊ້ປຸ່ມກົດແລ້ວ
  const navigate = useNavigate();
  const location = useLocation();
  const [theme] = useState(localStorage.getItem("theme") || "light");
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const menus = [
    { name: "ໜ້າຫຼັກ", icon: LayoutDashboard, page: "/" },
    { name: "ຂໍ້ມູນລູກຄ້າ", icon: User, page: "/user" },
    { name: "ການຂາຍ", icon: BarChart3, page: "/seller" },
    { name: "ການຕໍ່ສັນຍາ", icon: FileText, page: "/contact" },
    { name: "ລາຍງານ", icon: ChartNoAxesCombined, page: "/report" },
    {
      name: "ຕັ້ງຄ່າ",
      icon: Settings,
      page: "/setting",
      submenu: true,
      submenuItems: [
        { name: "ແພັກເກັດ", icon: Package, page: "/setting/profile" },
        { name: "ການເຄື່ອນໄຫວ", icon: Footprints, page: "/setting/system" },
        { name: "ແຈ້ງເຕືອນ", icon: Bell, page: "/setting/notifications" },
        { name: "ສິດເຂົ້າໃຊ້", icon: UserKey, page: "/role" },
      ],
    },
  ];

  return (
    <aside
      className={`${
        theme === "light" ? "bg-white" : "bg-slate-900"
      } border-r border-gray-200 h-screen sticky top-0 ${isOpen ? "w-64" : "w-20"} 
      duration-300 p-5 pt-8 relative flex flex-col transition-all overflow-hidden`} // ປ່ຽນເປັນ overflow-hidden ເພື່ອຄວາມເປັນລະບຽບ
    >
      
      {/* --- ປຸ່ມ Toggle ຖືກເອົາອອກແລ້ວ --- */}

      {/* Logo Section */}
      <div className="flex gap-x-4 items-center mb-10 px-2 shrink-0">
        <div className="bg-blue-600 p-1.5 rounded-lg text-white shrink-0 shadow-md">
          <LayoutDashboard size={22} />
        </div>
        <h1 className={`text-gray-800 font-bold text-xl duration-200 origin-left ${!isOpen && "scale-0 opacity-0 hidden"}`}>
          LaoAdmin
        </h1>
      </div>

      {/* Nav Section */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
        <ul>
          {menus.map((menu, index) => {
            const isActive = location.pathname === menu.page;

            return (
              <div key={index} className="relative group">
                <li
                  onClick={() => {
                    if (menu.submenu) {
                      setIsSettingOpen(!isSettingOpen);
                    } else {
                      navigate(menu.page);
                    }
                  }}
                  className={`
                    flex items-center justify-between p-3 my-2 cursor-pointer rounded-xl transition-all
                    ${isActive ? "bg-blue-50 text-blue-600 shadow-sm" : "text-gray-500 hover:bg-gray-50 hover:text-blue-500"}
                  `}
                >
                  <div className="flex items-center gap-x-4">
                    <menu.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                    <span className={`font-medium whitespace-nowrap duration-200 ${!isOpen && "hidden"}`}>
                      {menu.name}
                    </span>
                  </div>

                  {menu.submenu && isOpen && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${isSettingOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </li>

                {/* Submenu Area */}
                {menu.submenu && isSettingOpen && isOpen && (
                  <ul className="ml-5 mt-1 space-y-1 border-l-2 border-blue-100 pl-4 animate-in fade-in duration-300">
                    {menu.submenuItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        onClick={() => navigate(subItem.page)}
                        className={`flex p-2 gap-x-3 text-sm cursor-pointer rounded-lg transition-colors
                          ${location.pathname === subItem.page ? "text-blue-600 font-semibold bg-blue-50/50" : "text-gray-500 hover:text-blue-500 hover:bg-gray-50"}
                        `}
                      >
                        <subItem.icon size={16} />
                        <span>{subItem.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="border-t border-gray-100 pt-4 shrink-0">
        <button className="flex items-center gap-x-4 p-3 w-full text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
          <LogOut size={22} />
          <span className={`font-medium duration-200 ${!isOpen && "hidden"}`}>
            ອອກຈາກລະບົບ
          </span>
        </button>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </aside>
  );
};

export default SideBarComponents;