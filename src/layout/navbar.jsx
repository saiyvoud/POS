import { Bell, UserCircle, ChevronRight, Moon, Sun, Menu, AlignLeft } from "lucide-react";
import { useTheme } from "../config/theme/ThemeContext";
import { useLocation, Link } from "react-router-dom";

// ຮັບ Props isOpen ແລະ setIsOpen ຈາກ Parent (Layout)
const NavbarComponents = ({ isOpen, setIsOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className={`
        h-16 flex items-center justify-between px-6 sticky top-0 
        z-[50] 
        transition-all duration-300
        ${
          theme === "light"
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
            : "bg-slate-900/80 backdrop-blur-md border-b border-gray-700 text-white"
        }
      `}
    >
      {/* Left Side: Toggle Button & Breadcrumbs */}
      <div className="flex items-center gap-x-4">
        
        {/* --- ປຸ່ມ Toggle Sidebar ທີ່ຍ້າຍມາຈາກ Sidebar --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-2 rounded-lg transition-all active:scale-90
            ${theme === 'light' ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-slate-800 text-gray-300'}
          `}
        >
          {/* ປ່ຽນ Icon ຕາມສະຖານະການເປີດ-ປິດ */}
          {isOpen ? <AlignLeft size={24} /> : <Menu size={24} />}
        </button>

        {/* ບ່ອນສະແດງ Breadcrumbs */}
        <div className="flex items-center gap-x-2 text-sm font-medium border-l pl-4 border-gray-200 dark:border-gray-700">
          <Link 
            to="/" 
            className="text-gray-400 hover:text-blue-500 transition-colors uppercase tracking-wider text-[10px]"
          >
            Home
          </Link>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <div key={name} className="flex items-center gap-x-2">
                <ChevronRight size={12} className="text-gray-300" />
                {isLast ? (
                  <span className={`capitalize font-bold ${theme === "light" ? "text-slate-800" : "text-blue-400"}`}>
                    {name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-blue-500 capitalize transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-x-5">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`
            w-10 h-10 flex items-center justify-center rounded-xl transition-all active:scale-90
            ${theme === 'light' ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-800 text-yellow-400 hover:bg-slate-700'}
          `}
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        {/* Notification */}
        <button className="relative p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full border-2 border-white font-bold">
            3
          </span>
        </button>

        {/* Profile Section */}
        <div className={`flex items-center gap-x-3 border-l pl-5 ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
          <div className="text-right hidden sm:block">
            <p className={`text-sm font-bold leading-none mb-1 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Somsak Dev</p>
            <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Administrator</p>
          </div>
          <div className="relative group">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 p-[2px] rounded-full cursor-pointer group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200/50">
              <div className="bg-white rounded-full p-0.5 w-full h-full">
                <UserCircle size={32} className="text-blue-600 w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponents;