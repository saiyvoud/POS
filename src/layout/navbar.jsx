import { Search, Bell, UserCircle } from "lucide-react";
import { useTheme } from "../config/theme/ThemeContext";
const NavbarComponents = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={
        theme === "light"
          ? "h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10"
          : "h-16 bg-slate-900 border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10"
      }
    >
      {/* Search Bar */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="ຄົ້ນຫາຂໍ້ມູນ..."
          className={
            theme === "light"
              ? "w-full pl-10 pr-4 py-2  bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all"
              : "w-full pl-10 pr-4 py-2 bg-gray-100 text-black border-none rounded-lg focus:ring-2 focus:ring-blue-500 text-sm outline-none transition-all "
          }
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-x-5">
        <button
          onClick={toggleTheme}
          className=" px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button className="relative text-gray-500 hover:text-blue-600 transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
            3
          </span>
        </button>
        <div className="flex items-center gap-x-3 border-l pl-5 border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">Somsak Dev</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="bg-blue-100 p-1.5 rounded-full text-blue-600 cursor-pointer hover:bg-blue-200 transition-colors">
            <UserCircle size={28} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponents;
