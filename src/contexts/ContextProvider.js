import React, { useContext, useState, createContext } from 'react';

const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('light');
  const [themeSetting, setThemeSetting] = useState(false);

  const handleClick = (title) => {
    setClicked((prevState) => {
      return { ...initialState, [title]: !prevState[title] };
    });
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSetting(false);
  };
  const setColor = (e) => {
    setCurrentColor(e.target.value);
    localStorage.setItem('themeColor', e.target.value);
    setThemeSetting(false);
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setColor,
        setMode,
        currentColor,
        currentMode,
        setThemeSetting,
        themeSetting,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
