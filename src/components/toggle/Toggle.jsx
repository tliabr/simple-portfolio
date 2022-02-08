import React from 'react';
import { MdOutlineWbSunny, MdDarkMode } from "react-icons/md";
import { ThemeContext } from '../context';
import './toggle.css'
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = ()=>{
    theme.dispatch({type:'TOGGLE'})
  }

  return (
    <div className="t-container">
      <div className="t" onClick={handleClick}>
        <MdDarkMode className="t-icon t-icon-dark" />
        <MdOutlineWbSunny className="t-icon t-icon-light" />
        <button
          className="t-button"
          style={{ left: theme.state.darkMode ? -5 : 30 }}
        ></button>
      </div>
    </div>
  );
};

export default Toggle;
