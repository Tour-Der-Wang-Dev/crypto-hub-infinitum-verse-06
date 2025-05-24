
import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from 'react';

interface ThemeContextType {
  mode: 'day' | 'night';
  toggleMode: () => void;
  isAutoMode: boolean;
  setAutoMode: (auto: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<'day' | 'night'>('day');
  const [isAutoMode, setIsAutoMode] = useState(true);

  const getTimeBasedMode = useCallback((): 'day' | 'night' => {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? 'day' : 'night';
  }, []);

  useEffect(() => {
    if (isAutoMode) {
      const updateMode = () => {
        setMode(getTimeBasedMode());
      };

      updateMode();
      const interval = setInterval(updateMode, 60000); // Check every minute

      return () => clearInterval(interval);
    }
  }, [isAutoMode, getTimeBasedMode]);

  useEffect(() => {
    // Apply theme classes to document
    const root = document.documentElement;
    root.classList.remove('theme-day', 'theme-night');
    root.classList.add(`theme-${mode}`);
  }, [mode]);

  const toggleMode = useCallback(() => {
    setIsAutoMode(false);
    setMode(current => current === 'day' ? 'night' : 'day');
  }, []);

  const setAutoModeCallback = useCallback((auto: boolean) => {
    setIsAutoMode(auto);
    if (auto) {
      setMode(getTimeBasedMode());
    }
  }, [getTimeBasedMode]);

  const value = useMemo(() => ({
    mode,
    toggleMode,
    isAutoMode,
    setAutoMode: setAutoModeCallback
  }), [mode, toggleMode, isAutoMode, setAutoModeCallback]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
