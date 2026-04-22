import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ກວດເຊັກໃນ LocalStorage ວ່າເຄີຍຕັ້ງຄ່າໄວ້ບໍ່ ຖ້າບໍ່ມີໃຫ້ໃຊ້ Light 
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement; // ເຂົ້າເຖິງ <html> tag
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // ເກັບຄ່າໄວ້ໃນ LocalStorage ເວລາ Refresh ຈະໄດ້ບໍ່ຫາຍ
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    window.location.reload();
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
       {children}    
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);