import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSetting } =
    useStateContext();

  return (
    <div className="bg-half-transparent h-screen fixed nav-item top-0 right-0">
      <div
        className="float-right h-400 dark:text-gray-200 bg-white
      dark:bg-main-dark-bg w-screen"
      >
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="text-2xl font-semibold"> Settings</p>
          <button
            onClick={() => {
              setThemeSetting(false);
            }}
            style={{ color: 'rgp(153,171,180)', borderRadius: '50%' }}
            className="text-3xl p-4 hover:drop-shadow-xl hover:bg-light-gray dark:hover:text-black"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="text-lg font-semibold">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item) => (
              <TooltipComponent
                key={item.name}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer "
                    style={{ backgroundColor: item.color }}
                    value={item.color}
                    onClick={setColor}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        currentColor === item.color ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
